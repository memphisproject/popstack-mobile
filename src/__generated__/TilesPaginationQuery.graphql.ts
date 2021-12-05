/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import {  } from "relay-runtime";
export type TilesPaginationQueryVariables = {
    first: number;
    after?: string | null | undefined;
    id: unknown;
};
export type TilesPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TilesFrag_tiles">;
};
export type TilesPaginationQuery = {
    readonly response: TilesPaginationQueryResponse;
    readonly variables: TilesPaginationQueryVariables;
};



/*
query TilesPaginationQuery(
  $first: Int!
  $after: String
  $id: uuid!
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
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "after"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "first"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "id"
    } as any, v3 = {
        "kind": "Variable",
        "name": "after",
        "variableName": "after"
    } as any, v4 = {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
    } as any, v5 = [
        (v3 /*: any*/),
        (v4 /*: any*/),
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
    ], v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "TilesPaginationQuery",
            "selections": [
                {
                    "args": [
                        (v3 /*: any*/),
                        (v4 /*: any*/),
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
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/),
                (v2 /*: any*/)
            ],
            "kind": "Operation",
            "name": "TilesPaginationQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
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
                                        (v6 /*: any*/),
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
                                                (v6 /*: any*/),
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
                    "args": (v5 /*: any*/),
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
            "cacheID": "97579e515756ea0c094e13a283947d14",
            "id": null,
            "metadata": {},
            "name": "TilesPaginationQuery",
            "operationKind": "query",
            "text": "query TilesPaginationQuery(\n  $first: Int!\n  $after: String\n  $id: uuid!\n) {\n  ...TilesFrag_tiles_XKRaI\n}\n\nfragment TilesFrag_tiles_XKRaI on query_root {\n  collections_tiles_connection(first: $first, after: $after, where: {collection: {id: {_eq: $id}}}, order_by: {order: asc}) {\n    edges {\n      cursor\n      node {\n        id\n        order\n        ...TilesListItemFrag_collections\n        ...TilesTextFrag_collections\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment TilesListItemFrag_collections on collections_tiles {\n  tile {\n    id\n    content\n    type\n  }\n}\n\nfragment TilesTextFrag_collections on collections_tiles {\n  tile {\n    id\n    content\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '54d17022ebd866c422740ded6a51ab3b';
export default node;
