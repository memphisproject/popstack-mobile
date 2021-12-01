import React, { Suspense } from 'react';
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
                }
              }
              name
            }
          }
        }
      }
    `,
    { id: 'd4e63b30-144c-44df-9fa7-0034bc5a735b' },
  );
  const navigation = useNavigation();
  const collectionsSize =
    data.users_connection.edges[0]?.node.users_collections.length;

  return (
    <Container>
      <Suspense fallback={<Title>Loading</Title>}>
        <Header>
          <TitleWrapper>
            <Title>Collections</Title>
            <Subtitle>Total {collectionsSize} collections</Subtitle>
          </TitleWrapper>
          <InvisibleButton>+ New Collection</InvisibleButton>
        </Header>

        <FavouritesWrapper>
          {data.users_connection.edges[0]?.node.users_collections
            .filter(collection => collection.is_pinned)
            .map(collection => (
              <FavouriteCollection
                key={collection.collection.id}
                collection={collection.collection}
                onPress={() => {
                  navigation.navigate('Collection' as never);
                }}
              />
            ))}
        </FavouritesWrapper>

        <CollectionListWrapper>
          <CollectionList
            data={data.users_connection.edges[0]?.node.users_collections.filter(
              collection => !collection.is_pinned,
            )}
            keyExtractor={item => item.collection.id}
            renderItem={({ item }) => (
              <CollectionListItem collection={item.collection} />
            )}
          />
        </CollectionListWrapper>
      </Suspense>
    </Container>
  );
};

export default Home;
