/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type CollectionsListItemFrag_collections = {
    readonly collection: {
        readonly id: string;
        readonly image: string | null;
        readonly title: string;
        readonly updated_at: unknown;
    };
    readonly " $refType": "CollectionsListItemFrag_collections";
};
export type CollectionsListItemFrag_collections$data = CollectionsListItemFrag_collections;
export type CollectionsListItemFrag_collections$key = {
    readonly " $data"?: CollectionsListItemFrag_collections$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionsListItemFrag_collections">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionsListItemFrag_collections",
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
        }
    ],
    "type": "users_collections",
    "abstractKey": null
} as any;
(node as any).hash = '256519032bedb7893c107824861f9cf1';
export default node;
