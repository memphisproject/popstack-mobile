import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Collection from '../screens/Collection';
import BottomTabBar from '../components/BottomNav/BottomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen name="Home" component={Home} />
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
