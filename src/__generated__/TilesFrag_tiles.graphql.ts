/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type TilesFrag_tiles = {
    readonly collections_tiles_connection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly order: number;
                readonly " $fragmentRefs": FragmentRefs<"TilesListItemFrag_collections" | "TilesTextFrag_collections">;
            };
        }>;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string;
        };
    };
    readonly " $refType": "TilesFrag_tiles";
};
export type TilesFrag_tiles$data = TilesFrag_tiles;
export type TilesFrag_tiles$key = {
    readonly " $data"?: TilesFrag_tiles$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TilesFrag_tiles">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        "collections_tiles_connection"
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
                "operation": require('./CollectionsTilesQuery.graphql')
            }
        },
        "name": "TilesFrag_tiles",
        "selections": [
            {
                "alias": "collections_tiles_connection",
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
                                "name": "collection"
                            }
                        ],
                        "kind": "ObjectValue",
                        "name": "where"
                    }
                ],
                "concreteType": "collections_tilesConnection",
                "kind": "LinkedField",
                "name": "__search_collections_tiles_connection_connection",
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
                                        "name": "order",
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
                                        "name": "TilesListItemFrag_collections"
                                    },
                                    {
                                        "args": null,
                                        "kind": "FragmentSpread",
                                        "name": "TilesTextFrag_collections"
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
(node as any).hash = '9d06f49f6dc1b9ec502b5a9a34f403e0';
export default node;
