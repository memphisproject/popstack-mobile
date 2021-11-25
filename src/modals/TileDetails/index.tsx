import React from 'react';

import Tabs from '../../components/Tabs';
import TextTileEditor from '../../components/Tile/TextTileEditor';
import { useTabs } from '../../hooks/useTabs';

import { Container, TabsContainer, EditorContainer } from './styles';

interface TileDetailsProps {
  closeTileDetails: () => void;
}

const TileDetails: React.FC<TileDetailsProps> = () => {
  const { activeTab } = useTabs();
  return (
    <Container>
      <TabsContainer>
        <Tabs initialActiveTab="tileDetails@editor" />
      </TabsContainer>
      <EditorContainer>
        {activeTab === 'tileDetails@editor' && <TextTileEditor />}
      </EditorContainer>
    </Container>
  );
};

export default TileDetails;
