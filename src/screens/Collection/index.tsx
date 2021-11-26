import React, { useState } from 'react';
import { Modal } from 'react-native';

import CategoryLabel from '../../components/CategoryLabel';
import TextTile from '../../components/Tile/TextTile';
import TileDetails from '../../modals/TileDetails';

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
          <Title>My personal Instagram about psychology</Title>
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
