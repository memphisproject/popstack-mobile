import React, { useState } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import StaticElement from '../StaticElements';

import {
  NavBarWrapper,
  Container,
  CreateButton,
  CreateButtonClickHandler,
  CreateButtonWrapper,
  NavButtonsWrapper,
  CreateActions,
  CreateActionsWrapper,
  Action,
  ActionWrapper,
  ActionIcon,
} from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, ...rest }) => {
  const [createButtonClicked, setCreateButtonClicked] = useState<0 | 1>(0);

  const icon = useAnimatedStyle(() => ({
    transform: [{ rotate: `${mix(createButtonClicked, Math.PI / 4, 0)}rad` }],
  }));

  const content = useAnimatedStyle(() => ({
    opacity: interpolate(
      createButtonClicked,
      [0.9, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: mix(createButtonClicked, 80, 0),
      },
      {
        scale: interpolate(
          createButtonClicked,
          [0.9, 1],
          [0, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const handleCreateButtonClicked = () => {
    setCreateButtonClicked(createButtonClicked ? 0 : 1);
  };

  return (
    <NavBarWrapper>
      <Container {...rest}>
        <NavButtonsWrapper>
          <StaticElement
            icon="copy"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <StaticElement
            icon="activity"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <CreateButtonClickHandler onPress={handleCreateButtonClicked}>
            <CreateButtonWrapper style={icon} isOpened={!!createButtonClicked}>
              <CreateButton name="x" />
            </CreateButtonWrapper>
          </CreateButtonClickHandler>

          <StaticElement
            icon="message-circle"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <StaticElement
            icon="user"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </NavButtonsWrapper>
      </Container>
      <CreateActionsWrapper>
        <CreateActions style={content}>
          <ActionWrapper>
            <ActionIcon name="copy" />
            <Action>Create Tile</Action>
          </ActionWrapper>
          <ActionWrapper>
            <ActionIcon name="copy" />
            <Action>Create Link Tile</Action>
          </ActionWrapper>
          <ActionWrapper>
            <ActionIcon name="copy" />
            <Action>Create Query Tile</Action>
          </ActionWrapper>
        </CreateActions>
      </CreateActionsWrapper>
    </NavBarWrapper>
  );
};

export default BottomTabBar;
