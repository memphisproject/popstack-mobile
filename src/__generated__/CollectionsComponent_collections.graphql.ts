/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsComponent_collections = {
    readonly collection: {
        readonly id: string;
        readonly title: string;
    };
    readonly " $refType": "CollectionsComponent_collections";
};
export type CollectionsComponent_collections$data = CollectionsComponent_collections;
export type CollectionsComponent_collections$key = {
    readonly " $data"?: CollectionsComponent_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionsComponent_collections">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionsComponent_collections",
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
(node as any).hash = '9c36d4f46cc5f4142c4440eacd0d9079';
export default node;
