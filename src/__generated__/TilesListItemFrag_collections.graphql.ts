/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type TilesListItemFrag_collections = {
    readonly tile: {
        readonly id: string;
        readonly content: unknown;
        readonly type: string;
    };
    readonly " $refType": "TilesListItemFrag_collections";
};
export type TilesListItemFrag_collections$data = TilesListItemFrag_collections;
export type TilesListItemFrag_collections$key = {
    readonly " $data"?: TilesListItemFrag_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TilesListItemFrag_collections">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TilesListItemFrag_collections",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "tiles",
            "kind": "LinkedField",
            "name": "tile",
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
        }
    ],
    "type": "collections_tiles",
    "abstractKey": null
} as any;
(node as any).hash = '7d34aafd48f25a7f2845a05a0f2c7c8a';
export default node;
