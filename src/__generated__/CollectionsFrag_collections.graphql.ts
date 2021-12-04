/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsFrag_collections = {
    readonly users_collections_connection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly is_pinned: boolean;
                readonly " $fragmentRefs": FragmentRefs<"CollectionsListItemFrag_collections">;
            };
        }>;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string;
        };
    };
    readonly " $refType": "CollectionsFrag_collections";
};
export type CollectionsFrag_collections$data = CollectionsFrag_collections;
export type CollectionsFrag_collections$key = {
    readonly " $data"?: CollectionsFrag_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionsFrag_collections">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        "users_collections_connection"
    ];
    return {
        "argumentDefinitions": [
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "after"
            },
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "first"
            },
            {
                "defaultValue": null,
                "kind": "LocalArgument",
                "name": "id"
            }
        ],
        "kind": "Fragment",
        "metadata": {
            "connection": [
                {
                    "count": "first",
                    "cursor": "after",
                    "direction": "forward",
                    "path": (v0 /*: any*/)
                }
            ],
            "refetch": {
                "connection": {
                    "forward": {
                        "count": "first",
                        "cursor": "after"
                    },
                    "backward": null,
                    "path": (v0 /*: any*/)
                },
                "fragmentPathInResult": [],
                "operation": require('./CollectionsQuery.graphql')
            }
        },
        "name": "CollectionsFrag_collections",
        "selections": [
            {
                "alias": "users_collections_connection",
                "args": [
                    {
                        "kind": "Literal",
                        "name": "order_by",
                        "value": {
                            "order": "asc"
                        }
                    },
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
                    }
                ],
                "concreteType": "users_collectionsConnection",
                "kind": "LinkedField",
                "name": "__search_users_collections_connection_connection",
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
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "id",
                                        "storageKey": null
                                    },
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
                                        "kind": "ScalarField",
                                        "name": "__typename",
                                        "storageKey": null
                                    },
                                    {
                                        "args": null,
                                        "kind": "FragmentSpread",
                                        "name": "CollectionsListItemFrag_collections"
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
            }
        ],
        "type": "query_root",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '265c146458f859d07133b4b7d64d97f5';
export default node;
