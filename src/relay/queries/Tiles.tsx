import { graphql } from 'react-relay';

export const tilesQuery = graphql`
  query TilesPaginationQuery($first: Int!, $after: String, $id: uuid!) {
    ...TilesFrag_tiles @arguments(first: $first, after: $after, id: $id)
  }
`;

export const collectionFragment = graphql`
  fragment TilesFrag_tiles on query_root
  @argumentDefinitions(
    first: { type: "Int" }
    after: { type: "String" }
    id: { type: "uuid" }
  )
  @refetchable(queryName: "CollectionsTilesQuery") {
    collections_tiles_connection(
      first: $first
      after: $after
      where: { collection: { id: { _eq: $id } } }
      order_by: { order: asc }
    ) @connection(key: "search_collections_tiles_connection") {
      edges {
        cursor
        node {
          id
          order
          ...TilesListItemFrag_collections
          ...TilesTextFrag_collections
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const tilesListItemFragment = graphql`
  fragment TilesListItemFrag_collections on collections_tiles {
    tile {
      id
      content
      type
    }
  }
`;

export const textTileFragment = graphql`
  fragment TilesTextFrag_collections on collections_tiles {
    tile {
      id
      content
    }
  }
`;
