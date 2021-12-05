/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type TilesTextFrag_collections = {
    readonly tile: {
        readonly id: string;
        readonly content: unknown;
    };
    readonly " $refType": "TilesTextFrag_collections";
};
export type TilesTextFrag_collections$data = TilesTextFrag_collections;
export type TilesTextFrag_collections$key = {
    readonly " $data"?: TilesTextFrag_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TilesTextFrag_collections">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TilesTextFrag_collections",
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
                }
            ],
            "storageKey": null
        }
    ],
    "type": "collections_tiles",
    "abstractKey": null
} as any;
(node as any).hash = 'e3a2713a81282d83af37834cfd59179f';
export default node;
