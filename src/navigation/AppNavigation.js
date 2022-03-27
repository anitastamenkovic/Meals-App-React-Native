import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MealsNavigator from './navigators/MealsNavigator';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
