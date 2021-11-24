import React from 'react';

import Tabs from '../../components/Tabs';
import TextTileEditor from '../../components/Tile/TextTileEditor';

import { Container, TabsContainer, EditorContainer } from './styles';

const TileDetails: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <Tabs />
      </TabsContainer>
      <EditorContainer>
        <TextTileEditor />
      </EditorContainer>
    </Container>
  );
};

export default TileDetails;
