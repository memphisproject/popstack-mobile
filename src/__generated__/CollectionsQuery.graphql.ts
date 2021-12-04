/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsQueryVariables = {
    after?: string | null | undefined;
    first?: number | null | undefined;
    id?: unknown | null | undefined;
};
export type CollectionsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionsFrag_collections">;
};
export type CollectionsQuery = {
    readonly response: CollectionsQueryResponse;
    readonly variables: CollectionsQueryVariables;
};



/*
query CollectionsQuery(
  $after: String
  $first: Int
  $id: uuid
) {
  ...CollectionsFrag_collections_XKRaI
}

fragment CollectionsFrag_collections_XKRaI on query_root {
  users_collections_connection(first: $first, after: $after, where: {user: {id: {_eq: $id}}}, order_by: {order: asc}) {
    edges {
      cursor
      node {
        id
        is_pinned
        ...CollectionsListItemFrag_collections
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment CollectionsListItemFrag_collections on users_collections {
  collection {
    id
    image
    title
    updated_at
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
                    "name": "user"
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
            "name": "CollectionsQuery",
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
                    "name": "CollectionsFrag_collections"
                }
            ],
            "type": "query_root",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "CollectionsQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v3 /*: any*/),
                    "concreteType": "users_collectionsConnection",
                    "kind": "LinkedField",
                    "name": "users_collections_connection",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "users_collectionsEdge",
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
                                    "concreteType": "users_collections",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        (v4 /*: any*/),
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "is_pinned",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "collections",
                                            "kind": "LinkedField",
                                            "name": "collection",
                                            "plural": false,
                                            "selections": [
                                                (v4 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "image",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "title",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "updated_at",
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
                    "key": "search_users_collections_connection",
                    "kind": "LinkedHandle",
                    "name": "users_collections_connection"
                }
            ]
        },
        "params": {
            "cacheID": "afed24a60bd48186d8d96dd02b72cef4",
            "id": null,
            "metadata": {},
            "name": "CollectionsQuery",
            "operationKind": "query",
            "text": "query CollectionsQuery(\n  $after: String\n  $first: Int\n  $id: uuid\n) {\n  ...CollectionsFrag_collections_XKRaI\n}\n\nfragment CollectionsFrag_collections_XKRaI on query_root {\n  users_collections_connection(first: $first, after: $after, where: {user: {id: {_eq: $id}}}, order_by: {order: asc}) {\n    edges {\n      cursor\n      node {\n        id\n        is_pinned\n        ...CollectionsListItemFrag_collections\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CollectionsListItemFrag_collections on users_collections {\n  collection {\n    id\n    image\n    title\n    updated_at\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '265c146458f859d07133b4b7d64d97f5';
export default node;
