import type { ReactNode } from 'react';
import React from 'react';

import { TabsProvider } from './useTabs';
import { TileActionsProvider } from './useTileActions';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <TileActionsProvider>
      <TabsProvider>{children}</TabsProvider>
    </TileActionsProvider>
  );
};

export default AppProvider;
