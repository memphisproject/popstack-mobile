import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Tabs from '../../components/Tabs';
import TextTileEditor from '../../components/Tile/TextTileEditor';
import { useTabs } from '../../hooks/useTabs';

import {
  Container,
  TabsContainer,
  EditorContainer,
  CloseTabWrapper,
  CloseButton,
} from './styles';

interface TileDetailsProps {
  closeTileDetails: () => void;
}

const initialActiveTab = 'tileDetails@editor';

const TileDetails: React.FC<TileDetailsProps> = ({ closeTileDetails }) => {
  const [selectedTab, setSelectedTab] = useState<string>('');
  const { activeTab } = useTabs();

  useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  return (
    <Container>
      <TabsContainer>
        <Tabs initialActiveTab={initialActiveTab} />
      </TabsContainer>
      <EditorContainer>
        {selectedTab === 'tileDetails@editor' && <TextTileEditor />}
        {selectedTab === 'tileDetails@comments' && <View />}
        {selectedTab === 'tileDetails@history' && <View />}
      </EditorContainer>
      <CloseTabWrapper>
        <CloseButton title="X" onPress={closeTileDetails} />
      </CloseTabWrapper>
    </Container>
  );
};

export default TileDetails;
