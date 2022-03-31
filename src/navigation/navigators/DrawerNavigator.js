import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import CategoriesScreen from '../../screens/CategoriesScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#ccc',
        sceneContainerStyle: {backgroundColor: '#666'},
        drawerContentStyle: {backgroundColor: '#333'},
        drawerInactiveTintColor: '#ccc',
        drawerActiveTintColor: '#333',
        drawerActiveBackgroundColor: '#ccc',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => {
            <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => {
            <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
