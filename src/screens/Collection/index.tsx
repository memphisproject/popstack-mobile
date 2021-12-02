import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFragment } from 'react-relay';
import { graphql } from 'react-relay/hooks';

import CategoryLabel from '../../components/CategoryLabel';
import TextTile from '../../components/Tile/TextTile';
import TileDetails from '../../modals/TileDetails';
import type { Collection_collections$key } from '../../__generated__/Collection_collections.graphql';

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
        <TextTile onPress={handleTileDetailsModalOpen} />
      </TilesListWrapper>

      <Modal visible={tileDetailsModalOpen}>
        <TileDetails closeTileDetails={handleTileDetailsModalClose} />
      </Modal>
    </Container>
  );
};

export default Collection;
