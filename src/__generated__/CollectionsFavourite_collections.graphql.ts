/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsFavourite_collections = {
    readonly collection: {
        readonly id: string;
        readonly title: string;
    };
    readonly " $refType": "CollectionsFavourite_collections";
};
export type CollectionsFavourite_collections$data = CollectionsFavourite_collections;
export type CollectionsFavourite_collections$key = {
    readonly " $data"?: CollectionsFavourite_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionsFavourite_collections">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionsFavourite_collections",
    "selections": [
        {
            "alias": null,
            "args": null,
            "concreteType": "collections",
            "kind": "LinkedField",
            "name": "collection",
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
                    "name": "title",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "users_collections",
    "abstractKey": null
} as any;
(node as any).hash = '77b145eb3358773d1a971e4009528f98';
export default node;
