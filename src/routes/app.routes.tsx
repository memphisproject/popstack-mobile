import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import Collection from '../screens/Collection';
import BottomTabBar from '../components/BottomNav/BottomTabBar';
import RelayHomeWrapper from '../components/RelayHomeWrapper';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen name="Home" component={RelayHomeWrapper} />
      <Screen name="Collection" component={Collection} />
    </Navigator>
  );
};

export default AppRoutes;

// screenOptions={{
//   headerShown: false,
//     tabBarStyle: {
//     position: 'absolute',
//       bottom: 25,
//       right: 20,
//       left: 20,
//       borderRadius: 25,
//   },
// }}
