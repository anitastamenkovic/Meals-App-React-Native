import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../../store/favorites-context';
import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = ({navigation}) => {
  const FavoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
    FavoriteMealCtx.ids.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
});

export default FavoritesScreen;
