import React, { useEffect, Suspense } from 'react';
import { useQueryLoader } from 'react-relay';
import AppLoading from 'expo-app-loading';

import { tilesQuery } from '../../relay/queries/Tiles';
import Collection from '../../screens/Collection';
import type { CollectionsTilesQuery } from '../../__generated__/CollectionsTilesQuery.graphql';

import { Container } from './styles';

const RelayCollectionWrapper: React.FC = () => {
  const [tilesQueryRef, loadTilesQuery] =
    useQueryLoader<CollectionsTilesQuery>(tilesQuery);

  useEffect(() => {
    loadTilesQuery({
      id: '1c40f40d-1de1-4ade-aa06-3ea731f2ee06',
      first: 10,
    });
  }, [loadTilesQuery]);
  return (
    <Container>
      <Suspense fallback={<AppLoading />}>
        {tilesQueryRef && <Collection tilesQueryRef={tilesQueryRef} />}
      </Suspense>
    </Container>
  );
};

export default RelayCollectionWrapper;
