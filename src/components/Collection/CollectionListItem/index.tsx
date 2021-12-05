import React from 'react';
import { format } from 'date-fns';
import { useFragment } from 'react-relay';

import { collectionListItemFragment } from '../../../relay/queries/Collections';
import type { CollectionsListItemFrag_collections$key } from '../../../__generated__/CollectionsListItemFrag_collections.graphql';

import {
  Container,
  TitleWrapper,
  Title,
  LastUpdated,
  LogoWrapper,
  LogoText,
  Logo,
} from './styles';

type CollectionListItemProps = {
  collection: CollectionsListItemFrag_collections$key;
};

const CollectionListItem: React.FC<CollectionListItemProps> = ({
  collection,
}) => {
  const data = useFragment(collectionListItemFragment, collection);

  return (
    <Container>
      <TitleWrapper>
        <Title>{data?.collection?.title}</Title>
        <LastUpdated>
          updated by {format(new Date(data.collection.updated_at), 'd.M.uu')}
        </LastUpdated>
      </TitleWrapper>
      <LogoWrapper hasImage={!!data?.collection.image}>
        {data?.collection?.image ? (
          <Logo
            source={{
              uri: data.collection.image,
            }}
          />
        ) : (
          <LogoText>
            {data.collection.title.toUpperCase().substring(0, 2)}
          </LogoText>
        )}
      </LogoWrapper>
    </Container>
  );
};

export default CollectionListItem;
