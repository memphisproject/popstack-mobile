import React, { useEffect, useState } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import NavButton from '../NavButton';
import AnimatedCreateButton from '../AnimatedCreateButton';
import CreateTileActionList from '../CreateTileActionsList';
import { useTileActions } from '../../../hooks/useTileActions';

import {
  NavBarWrapper,
  NavBar,
  NavButtonsWrapper,
  CreateActionsWrapper,
} from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, ...rest }) => {
  const { openCreateTextTileModal } = useTileActions();
  const [createButtonClicked, setCreateButtonClicked] = useState<0 | 1>(0);

  useEffect(() => {
    if (!openCreateTextTileModal && createButtonClicked) {
      handleCreateButtonClicked();
    }
  }, [openCreateTextTileModal]);

  const handleCreateButtonClicked = () => {
    setCreateButtonClicked(createButtonClicked ? 0 : 1);
  };

  return (
    <NavBarWrapper>
      <NavBar {...rest}>
        <NavButtonsWrapper>
          <NavButton
            icon="grid"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <NavButton
            icon="book-open"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <AnimatedCreateButton
            onPress={handleCreateButtonClicked}
            isOpen={createButtonClicked}
          />

          <NavButton
            icon="user"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <NavButton
            icon="bell"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </NavButtonsWrapper>
      </NavBar>
      <CreateActionsWrapper>
        <CreateTileActionList isOpen={createButtonClicked} />
      </CreateActionsWrapper>
    </NavBarWrapper>
  );
};

export default BottomTabBar;
