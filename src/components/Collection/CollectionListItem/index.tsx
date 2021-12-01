import React from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'react-relay/hooks';
import { format } from 'date-fns';

import type {
  CollectionListItem_collections$key,
  CollectionListItem_collections,
} from '../../../__generated__/CollectionListItem_collections.graphql';

import {
  Container,
  TitleWrapper,
  Title,
  LastUpdated,
  LogoWrapper,
  Logo,
} from './styles';

type CollectionListItemProps = {
  collection: CollectionListItem_collections$key;
};

const CollectionListItem: React.FC<CollectionListItemProps> = ({
  collection,
}: CollectionListItemProps) => {
  const data: CollectionListItem_collections = useFragment(
    graphql`
      fragment CollectionListItem_collections on collections {
        title
        updated_at
      }
    `,
    collection,
  );

  return (
    <Container>
      <TitleWrapper>
        <Title>{data?.title}</Title>
        <LastUpdated>
          updated by {format(new Date(data?.updated_at), 'd.M.uu')}
        </LastUpdated>
      </TitleWrapper>
      <LogoWrapper>
        <Logo>:</Logo>
      </LogoWrapper>
    </Container>
  );
};

export default CollectionListItem;
