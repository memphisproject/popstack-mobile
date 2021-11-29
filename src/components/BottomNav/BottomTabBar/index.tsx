import React, { useState } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import NavButton from '../NavButton';
import AnimatedCreateButton from '../AnimatedCreateButton';
import CreateTileActionList from '../CreateTileActionsList';

import {
  NavBarWrapper,
  NavBar,
  NavButtonsWrapper,
  CreateActionsWrapper,
} from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, ...rest }) => {
  const [createButtonClicked, setCreateButtonClicked] = useState<0 | 1>(0);

  const handleCreateButtonClicked = () => {
    setCreateButtonClicked(createButtonClicked ? 0 : 1);
  };

  return (
    <NavBarWrapper>
      <NavBar {...rest}>
        <NavButtonsWrapper>
          <NavButton
            icon="copy"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <NavButton
            icon="activity"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <AnimatedCreateButton
            onPress={handleCreateButtonClicked}
            isOpen={createButtonClicked}
          />

          <NavButton
            icon="message-circle"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <NavButton
            icon="user"
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
