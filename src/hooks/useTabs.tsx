import React, { createContext, useContext, useState } from 'react';

interface TabsContextData {
  setActiveTab: (tabId: string) => void;
  activeTab: string;
}

const TabsContext = createContext<TabsContextData>({} as TabsContextData);

export const TabsProvider: React.FC = ({ children }) => {
  const [activeTabId, setActiveTab] = useState<string>('');
  const handleSetActiveTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <TabsContext.Provider
      value={{ setActiveTab: handleSetActiveTab, activeTab: activeTabId }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextData => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabs must be used within an TabsProvider');
  }

  return context;
};
