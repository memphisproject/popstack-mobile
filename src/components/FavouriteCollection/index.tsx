import React from 'react';

import CategoryLabel from '../CategoryLabel';

import { Container, Header, TotalTileCount, Title } from './styles';

const FavouriteCollection: React.FC = () => {
  return (
    <Container>
      <Header>
        <CategoryLabel text="Psychology" />
        <TotalTileCount>Total 14 tiles</TotalTileCount>
      </Header>

      <Title>My personal Instagram about psychology</Title>
    </Container>
  );
};

export default FavouriteCollection;
