import React from 'react';

import {
  Container,
  Header,
  CategoryLabel,
  CategoryText,
  TotalTile,
  Title,
} from './styles';

const FavouriteCollection: React.FC = () => {
  return (
    <Container>
      <Header>
        <CategoryLabel>
          <CategoryText>Personal</CategoryText>
        </CategoryLabel>
        <TotalTile>Total 14 tiles</TotalTile>
      </Header>

      <Title>My personal Instagram about psychology</Title>
    </Container>
  );
};

export default FavouriteCollection;
