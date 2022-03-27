import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';

const MealsStack = createNativeStackNavigator();

const ContactsNavigator = () => {
  return (
    <MealsStack.Navigator initialRouteName="MealsCategories">
      <MealsStack.Screen name="MealsCategories" component={CategoriesScreen} />
      <MealsStack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    </MealsStack.Navigator>
  );
};

export default ContactsNavigator;
