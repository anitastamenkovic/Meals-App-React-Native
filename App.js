import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App: () => Node = () => {
  return <AppNavigation />;
};

const styles = StyleSheet.create({});

export default App;
