import React from 'react';
import { useFragment } from 'react-relay';

import CategoryLabel from '../../CategoryLabel';
import { CollectionsListItemFrag_collections$key } from '../../../__generated__/CollectionsListItemFrag_collections.graphql';
import type { CollectionsFavourite_collections$key } from '../../../__generated__/CollectionsFavourite_collections.graphql';
import { collectionListItemFragment } from '../../../relay/queries/Collections';

import { Container, Header, TotalTileCount, Title } from './styles';

type FavouriteCollectionProps = {
  onPress: () => void;
  collection: CollectionsFavourite_collections$key;
};

const FavouriteCollection: React.FC<FavouriteCollectionProps> = ({
  onPress,
  collection,
}) => {
  const data = useFragment(collectionListItemFragment, collection);

  return (
    <Container onPress={onPress}>
      <Header>
        <CategoryLabel text="Psychology" />
        <TotalTileCount>Total 14 tiles</TotalTileCount>
      </Header>

      <Title>{data?.collection?.title}</Title>
    </Container>
  );
};

export default FavouriteCollection;
