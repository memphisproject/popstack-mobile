/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsTilesQueryVariables = {
    after?: string | null | undefined;
    first?: number | null | undefined;
    id?: unknown | null | undefined;
};
export type CollectionsTilesQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TilesFrag_tiles">;
};
export type CollectionsTilesQuery = {
    readonly response: CollectionsTilesQueryResponse;
    readonly variables: CollectionsTilesQueryVariables;
};



/*
query CollectionsTilesQuery(
  $after: String
  $first: Int
  $id: uuid
) {
  ...TilesFrag_tiles_XKRaI
}

fragment TilesFrag_tiles_XKRaI on query_root {
  collections_tiles_connection(first: $first, after: $after, where: {collection: {id: {_eq: $id}}}, order_by: {order: asc}) {
    edges {
      cursor
      node {
        id
        order
        ...TilesListItemFrag_collections
        ...TilesTextFrag_collections
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment TilesListItemFrag_collections on collections_tiles {
  tile {
    id
    content
    type
  }
}

fragment TilesTextFrag_collections on collections_tiles {
  tile {
    id
    content
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "after"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "first"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "id"
        } as any
    ], v1 = {
        "kind": "Variable",
        "name": "after",
        "variableName": "after"
    } as any, v2 = {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
    } as any, v3 = [
        (v1 /*: any*/),
        (v2 /*: any*/),
        {
            "kind": "Literal",
            "name": "order_by",
            "value": {
                "order": "asc"
            }
        } as any,
        {
            "fields": [
                {
                    "fields": [
                        {
                            "fields": [
                                {
                                    "kind": "Variable",
                                    "name": "_eq",
                                    "variableName": "id"
                                }
                            ],
                            "kind": "ObjectValue",
                            "name": "id"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "collection"
                }
            ],
            "kind": "ObjectValue",
            "name": "where"
        } as any
    ], v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "CollectionsTilesQuery",
            "selections": [
                {
                    "args": [
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        {
                            "kind": "Variable",
                            "name": "id",
                            "variableName": "id"
                        }
                    ],
                    "kind": "FragmentSpread",
                    "name": "TilesFrag_tiles"
                }
            ],
            "type": "query_root",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "CollectionsTilesQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "collections_tilesConnection",
                    "kind": "LinkedField",
                    "name": "collections_tiles_connection",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "collections_tilesEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "cursor",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "collections_tiles",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        (v4 /*: any*/),
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "order",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "tiles",
                                            "kind": "LinkedField",
                                            "name": "tile",
                                            "plural": false,
                                            "selections": [
                                                (v4 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "content",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "type",
                                                    "storageKey": null
                                                }
                                            ],
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "__typename",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "hasNextPage",
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "endCursor",
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "filters": [
                        "where",
                        "order_by"
                    ],
                    "handle": "connection",
                    "key": "search_collections_tiles_connection",
                    "kind": "LinkedHandle",
                    "name": "collections_tiles_connection"
                }
            ]
        },
        "params": {
            "cacheID": "fe33e10c4a55bd093c27d9a58f3ce3da",
            "id": null,
            "metadata": {},
            "name": "CollectionsTilesQuery",
            "operationKind": "query",
            "text": "query CollectionsTilesQuery(\n  $after: String\n  $first: Int\n  $id: uuid\n) {\n  ...TilesFrag_tiles_XKRaI\n}\n\nfragment TilesFrag_tiles_XKRaI on query_root {\n  collections_tiles_connection(first: $first, after: $after, where: {collection: {id: {_eq: $id}}}, order_by: {order: asc}) {\n    edges {\n      cursor\n      node {\n        id\n        order\n        ...TilesListItemFrag_collections\n        ...TilesTextFrag_collections\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TilesListItemFrag_collections on collections_tiles {\n  tile {\n    id\n    content\n    type\n  }\n}\n\nfragment TilesTextFrag_collections on collections_tiles {\n  tile {\n    id\n    content\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9d06f49f6dc1b9ec502b5a9a34f403e0';
export default node;
