import * as React from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';

const MealsStack = createNativeStackNavigator();

const ContactsNavigator = () => {
  return (
    <MealsStack.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#ccc',
        contentStyle: {backgroundColor: '#666'},
      }}>
      <MealsStack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
        }}
      />
      <MealsStack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        // options={({route, navigation}) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   };
        // }}
      />
      <MealsStack.Screen name="MealDetail" component={MealDetailScreen} />
    </MealsStack.Navigator>
  );
};

export default ContactsNavigator;
