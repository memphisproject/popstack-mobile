import React from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import StaticElement from '../StaticElements';

import { Container, NavButtonsWrapper } from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, ...rest }) => {
  return (
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
        <StaticElement
          icon="x"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
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
  );
};

export default BottomTabBar;
