import { graphql } from 'react-relay';

export const collectionsQuery = graphql`
  query CollectionsPaginationQuery($first: Int!, $after: String, $id: uuid!) {
    ...CollectionsFrag_collections
      @arguments(first: $first, after: $after, id: $id)
  }
`;

export const collectionsHomeFragment = graphql`
  fragment CollectionsFrag_collections on query_root
  @argumentDefinitions(
    first: { type: "Int" }
    after: { type: "String" }
    id: { type: "uuid" }
  )
  @refetchable(queryName: "CollectionsQuery") {
    users_collections_connection(
      first: $first
      after: $after
      where: { user: { id: { _eq: $id } } }
      order_by: { order: asc }
    ) @connection(key: "search_users_collections_connection") {
      edges {
        cursor
        node {
          id
          is_pinned
          ...CollectionsListItemFrag_collections
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const collectionListItemFragment = graphql`
  fragment CollectionsListItemFrag_collections on users_collections {
    collection {
      id
      image
      title
      updated_at
    }
  }
`;

export const collectionFavouriteFragment = graphql`
  fragment CollectionsFavourite_collections on users_collections {
    collection {
      id
      title
    }
  }
`;
