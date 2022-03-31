import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './navigators/StackNavigator';
// import DrawerNavigator from './navigators/DrawerNavigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
