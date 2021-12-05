/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsPaginationQueryVariables = {
    first: number;
    after?: string | null | undefined;
    id: unknown;
};
export type CollectionsPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionsFrag_collections">;
};
export type CollectionsPaginationQuery = {
    readonly response: CollectionsPaginationQueryResponse;
    readonly variables: CollectionsPaginationQueryVariables;
};



/*
query CollectionsPaginationQuery(
  $first: Int!
  $after: String
  $id: uuid!
) {
  ...CollectionsFrag_collections_XKRaI
}

fragment CollectionsComponent_collections on users_collections {
  collection {
    id
    title
  }
}

fragment CollectionsFavourite_collections on users_collections {
  collection {
    id
    title
  }
}

fragment CollectionsFrag_collections_XKRaI on query_root {
  users_collections_connection(first: $first, after: $after, where: {user: {id: {_eq: $id}}}, order_by: {order: asc}) {
    edges {
      cursor
      node {
        id
        is_pinned
        ...CollectionsListItemFrag_collections
        ...CollectionsFavourite_collections
        ...CollectionsComponent_collections
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
                    "name": "user"
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
            "name": "CollectionsPaginationQuery",
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
                    "name": "CollectionsFrag_collections"
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
            "name": "CollectionsPaginationQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
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
                                        (v6 /*: any*/),
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
                                                (v6 /*: any*/),
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
                    "args": (v5 /*: any*/),
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
            "cacheID": "36baafa1d699eed6090613ca93a91447",
            "id": null,
            "metadata": {},
            "name": "CollectionsPaginationQuery",
            "operationKind": "query",
            "text": "query CollectionsPaginationQuery(\n  $first: Int!\n  $after: String\n  $id: uuid!\n) {\n  ...CollectionsFrag_collections_XKRaI\n}\n\nfragment CollectionsComponent_collections on users_collections {\n  collection {\n    id\n    title\n  }\n}\n\nfragment CollectionsFavourite_collections on users_collections {\n  collection {\n    id\n    title\n  }\n}\n\nfragment CollectionsFrag_collections_XKRaI on query_root {\n  users_collections_connection(first: $first, after: $after, where: {user: {id: {_eq: $id}}}, order_by: {order: asc}) {\n    edges {\n      cursor\n      node {\n        id\n        is_pinned\n        ...CollectionsListItemFrag_collections\n        ...CollectionsFavourite_collections\n        ...CollectionsComponent_collections\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment CollectionsListItemFrag_collections on users_collections {\n  collection {\n    id\n    image\n    title\n    updated_at\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'd8bd3896f3fc93ecee138f5da503be56';
export default node;
