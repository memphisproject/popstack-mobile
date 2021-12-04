import { commitMutation, ConnectionHandler } from 'relay-runtime';
import type { Environment } from 'react-relay/hooks';
import { graphql } from 'react-relay/hooks';

export const commitCreateTile = (
  environment: Environment,
  collectionRelayId: string,
) => {
  return commitMutation(environment, {
    mutation: graphql`
      mutation createTileMutation($collectionId: uuid!, $content: json) {
        insert_tiles_one(
          object: {
            type: "textTile"
            content: $content
            collections_tile: {
              data: { collection_fk: $collectionId, order: 900 }
            }
          }
        ) {
          id
          type
          ...TextTile_tiles
        }
      }
    `,
    variables: {
      collectionId: '1c40f40d-1de1-4ade-aa06-3ea731f2ee06',
      content: {
        images: [],
        urls: [],
        html: '<p>test 123</p>',
      },
    },
    onError: error => {
      console.log(error);
    },
    updater: store => {
      const collection = store.get(collectionRelayId);

      const collectionTiles = collection.getLinkedRecord(
        'collections_tiles_aggregate',
      );

      const tiles = collectionTiles.getLinkedRecords('nodes');
      console.log([...tiles]);
    },
  });
};
