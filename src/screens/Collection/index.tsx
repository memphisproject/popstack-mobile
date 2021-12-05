import React, { useState } from 'react';
import { Modal } from 'react-native';
import type { PreloadedQuery } from 'react-relay';
import {
  useFragment,
  usePaginationFragment,
  usePreloadedQuery,
} from 'react-relay';
import { useRoute } from '@react-navigation/native';

import CategoryLabel from '../../components/CategoryLabel';
import TextTile from '../../components/Tile/TextTile';
import TileDetails from '../../modals/TileDetails';
import type { CollectionsTilesQuery } from '../../__generated__/CollectionsTilesQuery.graphql';
import { collectionFragment, tilesQuery } from '../../relay/queries/Tiles';
import type { TilesPaginationQuery } from '../../__generated__/TilesPaginationQuery.graphql';
import type { TilesFrag_tiles$key } from '../../__generated__/TilesFrag_tiles.graphql';
import { collectionFavouriteFragment } from '../../relay/queries/Collections';
import type { CollectionsComponent_collections$key } from '../../__generated__/CollectionsComponent_collections.graphql';

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

type CollectionProps = {
  tilesQueryRef: PreloadedQuery<CollectionsTilesQuery, Record<string, unknown>>;
};

type NavigationProps = {
  collection: CollectionsComponent_collections$key;
};

const Collection: React.FC<CollectionProps> = ({ tilesQueryRef }) => {
  const response = usePreloadedQuery<CollectionsTilesQuery>(
    tilesQuery,
    tilesQueryRef,
  );

  const { data, isLoadingNext, loadNext } = usePaginationFragment<
    TilesPaginationQuery,
    TilesFrag_tiles$key
  >(collectionFragment, response);

  const tilesList = data?.collections_tiles_connection?.edges || [];

  const route = useRoute();
  const { collection } = route.params as NavigationProps;
  const collectionData = useFragment(collectionFavouriteFragment, collection);

  const [tileDetailsModalOpen, setTileDetailsModalOpen] = useState(false);

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
          <Title>{collectionData?.collection?.title}</Title>
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
          keyExtractor={item => item?.node?.id}
          renderItem={({ item }) => (
            <TextTile onPress={handleTileDetailsModalOpen} tile={item.node} />
          )}
          refreshing={isLoadingNext}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadNext(10)}
        />
      </TilesListWrapper>

      <Modal visible={tileDetailsModalOpen}>
        <TileDetails closeTileDetails={handleTileDetailsModalClose} />
      </Modal>
    </Container>
  );
};

export default Collection;
