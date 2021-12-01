import React from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'react-relay/hooks';

import CategoryLabel from '../../CategoryLabel';
import type { FavouriteCollection_collections$key } from '../../../__generated__/FavouriteCollection_collections.graphql';

import { Container, Header, TotalTileCount, Title } from './styles';

interface FavouriteCollectionProps {
  onPress: () => void;
  collection: FavouriteCollection_collections$key;
}

const FavouriteCollection: React.FC<FavouriteCollectionProps> = ({
  onPress,
  collection,
}) => {
  const data = useFragment(
    graphql`
      fragment FavouriteCollection_collections on collections {
        title
      }
    `,
    collection,
  );
  return (
    <Container onPress={onPress}>
      <Header>
        <CategoryLabel text="Psychology" />
        <TotalTileCount>Total 14 tiles</TotalTileCount>
      </Header>

      <Title>{data?.title}</Title>
    </Container>
  );
};

export default FavouriteCollection;
