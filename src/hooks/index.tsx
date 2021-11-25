import type { ReactNode } from 'react';
import React from 'react';

import { TabsProvider } from './useTabs';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

export default AppProvider;
