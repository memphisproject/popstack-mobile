import React, { createContext, useContext, useState } from 'react';

type TileType = 'textTile' | 'linkTile';

interface TileActionsContextData {
  createTile: (type: TileType) => void;
  openCreateTextTileModal: boolean;
  saveTextTile: () => void;
}

const TileActionsContext = createContext<TileActionsContextData>(
  {} as TileActionsContextData,
);

export const TileActionsProvider: React.FC = ({ children }) => {
  const [openCreateTextTileModal, setOpenCreateTextTileModal] =
    useState<boolean>(false);

  const handleCreateTextTile = (type: TileType) => {
    if (type === 'textTile') {
      setOpenCreateTextTileModal(true);
    }
  };

  const handleSaveTextTile = () => {
    setOpenCreateTextTileModal(false);
  };

  return (
    <TileActionsContext.Provider
      value={{
        createTile: handleCreateTextTile,
        openCreateTextTileModal,
        saveTextTile: handleSaveTextTile,
      }}
    >
      {children}
    </TileActionsContext.Provider>
  );
};

export const useTileActions = (): TileActionsContextData => {
  const context = useContext(TileActionsContext);

  if (!context) {
    throw new Error('useTabs must be used within an TabsProvider');
  }

  return context;
};
