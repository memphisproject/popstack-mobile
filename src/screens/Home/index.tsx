import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';

import FavouriteCollection from '../../components/Collection/FavouriteCollection';
import CollectionListItem from '../../components/Collection/CollectionListItem';
import type {
  HomeQuery,
  HomeQueryResponse,
} from '../../__generated__/HomeQuery.graphql';

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

const Home: React.FC = () => {
  const data: HomeQueryResponse = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery($id: uuid!) {
        users_connection(where: { id: { _eq: $id } }) {
          edges {
            node {
              users_collections(order_by: { order: asc }) {
                is_pinned
                collection {
                  id
                  ...CollectionListItem_collections
                  ...FavouriteCollection_collections
                  ...Collection_collections
                }
              }
            }
          }
        }
      }
    `,
    { id: 'd4e63b30-144c-44df-9fa7-0034bc5a735b' },
  );
  const navigation = useNavigation();
  const collectionsList =
    data.users_connection.edges[0]?.node.users_collections;
  const collectionsSize =
    data.users_connection.edges[0]?.node.users_collections.length;

  const handleCollectionNavigation = collection => {
    navigation.navigate('Collection', { collection });
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Collections</Title>
          <Subtitle>Total {collectionsSize} collections</Subtitle>
        </TitleWrapper>
        <InvisibleButton>+ New Collection</InvisibleButton>
      </Header>

      <FavouritesWrapper>
        {collectionsList &&
          collectionsList
            .filter(collection => collection.is_pinned)
            .map(item => (
              <FavouriteCollection
                key={item.collection.id}
                collection={item.collection}
                onPress={() => handleCollectionNavigation(item.collection)}
              />
            ))}
      </FavouritesWrapper>

      <CollectionListWrapper>
        <CollectionList
          data={
            collectionsList &&
            collectionsList.filter(collection => !collection.is_pinned)
          }
          keyExtractor={item => item.collection.id}
          renderItem={({ item }) => (
            <CollectionListItem
              collection={item.collection}
              onPress={() => handleCollectionNavigation(item.collection)}
            />
          )}
        />
      </CollectionListWrapper>
    </Container>
  );
};

export default Home;
