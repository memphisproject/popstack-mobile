import React, { useState, Suspense, useEffect } from 'react';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFragment } from 'react-relay';
import { graphql } from 'react-relay/hooks';

import CategoryLabel from '../../components/CategoryLabel';
import TextTile from '../../components/Tile/TextTile';
import TileDetails from '../../modals/TileDetails';
import CreateTextTile from '../../modals/CreateTextTile';
import { useTileActions } from '../../hooks/useTileActions';

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
  const { openCreateTextTileModal } = useTileActions();
  const { collection } = route.params;
  const [tileDetailsModalOpen, setTileDetailsModalOpen] = useState(false);
  const [createTextTileModalOpen, setCreateTextTileModalOpen] = useState(false);

  useEffect(() => {
    if (openCreateTextTileModal) {
      handleCreateTextTileModalOpen();
    } else {
      handleCreateTextTileModalClose();
    }
  }, [openCreateTextTileModal]);

  const collectionData = useFragment(
    graphql`
      fragment Collection_collections on collections {
        id
        title
        collections_tiles_aggregate {
          nodes {
            id
            order
            tile {
              id
              type
              ...TextTile_tiles
            }
          }
        }
      }
    `,
    collection,
  );

  const tilesList = collectionData.collections_tiles_aggregate.nodes;

  const handleCreateTextTileModalClose = () => {
    setCreateTextTileModalOpen(false);
  };

  const handleCreateTextTileModalOpen = () => {
    setCreateTextTileModalOpen(true);
  };

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
          <Suspense fallback={<Title>Loading</Title>}>
            <Title>{collectionData?.title}</Title>
          </Suspense>
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
          keyExtractor={item => item.tile.id}
          renderItem={({ item }) => (
            <TextTile onPress={handleTileDetailsModalOpen} tile={item.tile} />
          )}
        />
      </TilesListWrapper>

      <Modal visible={tileDetailsModalOpen}>
        <TileDetails closeTileDetails={handleTileDetailsModalClose} />
      </Modal>

      <Modal visible={createTextTileModalOpen}>
        <CreateTextTile
          closeCreateTextTile={handleCreateTextTileModalClose}
          collectionRelayId={collectionData.id}
        />
      </Modal>
    </Container>
  );
};

export default Collection;
