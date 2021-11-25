import React, { useEffect } from 'react';

import { useTabs } from '../../hooks/useTabs';

import { Container, TabWrapper, Tab } from './styles';

interface TabsProps {
  initialActiveTab: string;
}

const Tabs: React.FC<TabsProps> = ({ initialActiveTab }) => {
  const { setActiveTab, activeTab } = useTabs();

  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Container>
      <TabWrapper
        isActive={activeTab === 'tileDetails@editor'}
        onPress={() => handleTabClick('tileDetails@editor')}
      >
        <Tab isActive={activeTab === 'tileDetails@editor'}>Editor</Tab>
      </TabWrapper>
      <TabWrapper
        isActive={activeTab === 'tileDetails@comments'}
        onPress={() => handleTabClick('tileDetails@comments')}
      >
        <Tab isActive={activeTab === 'tileDetails@comments'}>Comments</Tab>
      </TabWrapper>
      <TabWrapper
        isActive={activeTab === 'tileDetails@history'}
        onPress={() => handleTabClick('tileDetails@history')}
      >
        <Tab isActive={activeTab === 'tileDetails@history'}>History</Tab>
      </TabWrapper>
    </Container>
  );
};

export default Tabs;
