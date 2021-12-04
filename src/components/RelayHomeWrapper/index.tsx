import React, { useEffect } from 'react';
import { useQueryLoader } from 'react-relay';

import { collectionsQuery } from '../../relay/queries/Collections';
import type { CollectionsQuery } from '../../__generated__/CollectionsQuery.graphql';
import Home from '../../screens/Home';

import { Container } from './styles';

const RelayHomeWrapper: React.FC = () => {
  const [collectionsQueryRef, loadCollectionsQuery] =
    useQueryLoader<CollectionsQuery>(collectionsQuery);

  useEffect(() => {
    loadCollectionsQuery({
      id: 'd4e63b30-144c-44df-9fa7-0034bc5a735b',
      first: 10,
    });
  }, [loadCollectionsQuery]);

  return (
    <Container>
      {collectionsQueryRef && <Home collectionQueryRef={collectionsQueryRef} />}
    </Container>
  );
};

export default RelayHomeWrapper;
