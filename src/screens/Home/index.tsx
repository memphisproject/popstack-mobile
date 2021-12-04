import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { PreloadedQuery } from 'react-relay';
import { usePaginationFragment, usePreloadedQuery } from 'react-relay';

import FavouriteCollection from '../../components/Collection/FavouriteCollection';
import CollectionListItem from '../../components/Collection/CollectionListItem';
import type { CollectionsQuery } from '../../__generated__/CollectionsQuery.graphql';
import {
  collectionsHomeFragment,
  collectionsQuery,
} from '../../relay/queries/Collections';
import type { CollectionsPaginationQuery } from '../../__generated__/CollectionsPaginationQuery.graphql';
import type { CollectionsFrag_collections$key } from '../../__generated__/CollectionsFrag_collections.graphql';
import type { Users_CollectionsEdge } from '../../types/graphql';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  InvisibleButton,
  FavouritesWrapper,
  CollectionListWrapper,
  CollectionList,
} from './styles';

type HomeProps = {
  collectionQueryRef: PreloadedQuery<CollectionsQuery, Record<string, unknown>>;
};

const Home: React.FC<HomeProps> = ({ collectionQueryRef }) => {
  const response = usePreloadedQuery<CollectionsQuery>(
    collectionsQuery,
    collectionQueryRef,
  );

  const { data, isLoadingNext, loadNext } = usePaginationFragment<
    CollectionsPaginationQuery,
    CollectionsFrag_collections$key
  >(collectionsHomeFragment, response);

  const collectionsList = data?.users_collections_connection?.edges || [];

  console.log(collectionsList);

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Collections</Title>
          <Subtitle>Total 10 collections</Subtitle>
        </TitleWrapper>
        <InvisibleButton>+ New Collection</InvisibleButton>
      </Header>

      <FavouritesWrapper>
        {collectionsList &&
          collectionsList
            .filter(collection => collection?.node?.is_pinned)
            .map(item => (
              <FavouriteCollection
                key={item?.node?.id}
                collection={item.node}
                onPress={() => {
                  navigation.navigate('Collection' as never);
                }}
              />
            ))}
      </FavouritesWrapper>

      <CollectionListWrapper>
        <CollectionList
          data={collectionsList.filter(
            collection => !collection?.node?.is_pinned,
          )}
          keyExtractor={({ item }: { item: Users_CollectionsEdge }) =>
            item?.node?.id
          }
          renderItem={({ item }) => (
            <CollectionListItem collection={item.node} />
          )}
          refreshing={isLoadingNext}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadNext(10)}
        />
      </CollectionListWrapper>
    </Container>
  );
};

export default Home;
