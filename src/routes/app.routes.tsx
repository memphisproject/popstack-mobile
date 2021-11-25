import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Collection from '../screens/Collection';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Collection" component={Collection} />
    </Navigator>
  );
};

export default AppRoutes;
