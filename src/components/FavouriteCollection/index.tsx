import React from 'react';

import {
  Container,
  Header,
  CategoryLabel,
  CategoryText,
  TotalTileCount,
  Title,
} from './styles';

const FavouriteCollection: React.FC = () => {
  return (
    <Container>
      <Header>
        <CategoryLabel>
          <CategoryText>Personal</CategoryText>
        </CategoryLabel>
        <TotalTileCount>Total 14 tiles</TotalTileCount>
      </Header>

      <Title>My personal Instagram about psychology</Title>
    </Container>
  );
};

export default FavouriteCollection;
