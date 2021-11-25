import React, { useEffect } from 'react';

import { useTabs } from '../../hooks/useTabs';

import { Container, TabWrapper, Tab } from './styles';

export const tabsRegistry = {
  editor: 'tileDetails@editor',
  comments: 'tileDetails@comments',
  history: 'tileDetails@history',
};

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
        isActive={activeTab === tabsRegistry.editor}
        onPress={() => handleTabClick(tabsRegistry.editor)}
      >
        <Tab isActive={activeTab === tabsRegistry.editor}>Editor</Tab>
      </TabWrapper>
      <TabWrapper
        isActive={activeTab === tabsRegistry.comments}
        onPress={() => handleTabClick(tabsRegistry.comments)}
      >
        <Tab isActive={activeTab === tabsRegistry.comments}>Comments</Tab>
      </TabWrapper>
      <TabWrapper
        isActive={activeTab === tabsRegistry.history}
        onPress={() => handleTabClick(tabsRegistry.history)}
      >
        <Tab isActive={activeTab === tabsRegistry.history}>History</Tab>
      </TabWrapper>
    </Container>
  );
};

export default Tabs;
