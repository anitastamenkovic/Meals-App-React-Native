import * as React from 'react';
// import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#ccc',
        contentStyle: {backgroundColor: '#666'},
      }}>
      <Stack.Screen
        name="MealsCategories"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: 'About the meal',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
