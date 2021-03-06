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
  LogoText,
} from './styles';

type CollectionListItemProps = {
  onPress: () => void;
  collection: CollectionListItem_collections$key;
};

const CollectionListItem: React.FC<CollectionListItemProps> = ({
  onPress,
  collection,
}: CollectionListItemProps) => {
  const data: CollectionListItem_collections =
    useFragment<CollectionListItem_collections>(
      graphql`
        fragment CollectionListItem_collections on collections {
          title
          updated_at
          image
        }
      `,
      collection,
    );

  return (
    <Container onPress={onPress}>
      <TitleWrapper>
        <Title>{data?.title}</Title>
        <LastUpdated>
          updated by {format(new Date(data?.updated_at), 'd.M.uu')}
        </LastUpdated>
      </TitleWrapper>
      <LogoWrapper hasImage={!!data.image}>
        {data?.image ? (
          <Logo
            source={{
              uri: data.image,
            }}
          />
        ) : (
          <LogoText>{data.title.toUpperCase().substring(0, 2)}</LogoText>
        )}
      </LogoWrapper>
    </Container>
  );
};

export default CollectionListItem;
