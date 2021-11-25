import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Tabs, { tabsRegistry } from '../../components/Tabs';
import TextTileEditor from '../../components/Tile/TextTileEditor';
import { useTabs } from '../../hooks/useTabs';
import Button from '../../components/Button';

import {
  Container,
  TabsContainer,
  EditorContainer,
  CloseTabWrapper,
} from './styles';

interface TileDetailsProps {
  closeTileDetails: () => void;
}

const TileDetails: React.FC<TileDetailsProps> = ({ closeTileDetails }) => {
  const [selectedTab, setSelectedTab] = useState<string>('');
  const { activeTab } = useTabs();

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  return (
    <Container>
      <TabsContainer>
        <Tabs initialActiveTab={tabsRegistry.editor} />
      </TabsContainer>
      <EditorContainer>
        {selectedTab === tabsRegistry.editor && <TextTileEditor />}
        {selectedTab === tabsRegistry.comments && <View />}
        {selectedTab === tabsRegistry.history && <View />}
      </EditorContainer>
      <CloseTabWrapper>
        <Button title="X" onPress={closeTileDetails} />
      </CloseTabWrapper>
    </Container>
  );
};

export default TileDetails;
