import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFragment } from 'react-relay';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import base64 from 'react-native-base64';

import CategoryLabel from '../../components/CategoryLabel';
import TextTile from '../../components/Tile/TextTile';
import TileDetails from '../../modals/TileDetails';
import type {
  CollectionQuery,
  CollectionQueryResponse,
} from '../../__generated__/CollectionQuery.graphql';
import CollectionListItem from '../../components/Collection/CollectionListItem';

import {
  Container,
  Header,
  Title,
  TitleWrapper,
  Icon,
  CategoriesList,
  SocialMetricsBar,
  SocialMetric,
  SocialMetricLabel,
  SocialMetricIcon,
  TilesListWrapper,
  TilesList,
} from './styles';

const Collection: React.FC = () => {
  const route = useRoute();
  const { collection } = route.params;
  const [tileDetailsModalOpen, setTileDetailsModalOpen] = useState(false);

  const collectionData = useFragment(
    graphql`
      fragment Collection_collections on collections {
        id
        title
      }
    `,
    collection,
  );

  const relayID = base64.decode(collectionData.id).substring(30, 66);

  const tilesData: CollectionQueryResponse = useLazyLoadQuery<CollectionQuery>(
    graphql`
      query CollectionQuery($id: uuid!) {
        collections_tiles_connection(
          where: { collection_fk: { _eq: $id } }
          order_by: { order: asc }
        ) {
          edges {
            node {
              tile {
                id
                type
                ...TextTile_tiles
              }
            }
          }
        }
      }
    `,
    { id: relayID },
  );

  const tilesList = tilesData.collections_tiles_connection.edges;

  const handleTileDetailsModalClose = () => {
    setTileDetailsModalOpen(false);
  };

  const handleTileDetailsModalOpen = () => {
    setTileDetailsModalOpen(true);
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>{collectionData?.title}</Title>
        </TitleWrapper>

        <Icon name="info" />
      </Header>

      <CategoriesList>
        <CategoryLabel text="Psychology" />
        <CategoryLabel text="Social Media" />
        <CategoryLabel text="Yada yada" />
      </CategoriesList>

      <SocialMetricsBar>
        <SocialMetric>
          <SocialMetricIcon name="eye" />
          <SocialMetricLabel>54</SocialMetricLabel>
        </SocialMetric>
        <SocialMetric>
          <SocialMetricIcon name="heart" />
          <SocialMetricLabel>100</SocialMetricLabel>
        </SocialMetric>
        <SocialMetric>
          <SocialMetricIcon name="message-circle" />
          <SocialMetricLabel>2</SocialMetricLabel>
        </SocialMetric>
      </SocialMetricsBar>

      <TilesListWrapper>
        <TilesList
          data={tilesList}
          keyExtractor={item => item.node.tile.id}
          renderItem={({ item }) => (
            <TextTile
              onPress={handleTileDetailsModalOpen}
              tile={item.node.tile}
            />
          )}
        />
      </TilesListWrapper>

      <Modal visible={tileDetailsModalOpen}>
        <TileDetails closeTileDetails={handleTileDetailsModalClose} />
      </Modal>
    </Container>
  );
};

export default Collection;
