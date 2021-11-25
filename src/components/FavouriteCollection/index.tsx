import React from 'react';

import CategoryLabel from '../CategoryLabel';

import { Container, Header, TotalTileCount, Title } from './styles';

interface FavouriteCollectionProps {
  onPress: () => void;
}

const FavouriteCollection: React.FC<FavouriteCollectionProps> = ({
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <Header>
        <CategoryLabel text="Psychology" />
        <TotalTileCount>Total 14 tiles</TotalTileCount>
      </Header>

      <Title>My personal Instagram about psychology</Title>
    </Container>
  );
};

export default FavouriteCollection;
