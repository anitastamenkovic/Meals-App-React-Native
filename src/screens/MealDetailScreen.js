import React, {useLayoutEffect, useContext, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../../store/favorites-context';

const MealDetailScreen = ({route, navigation}) => {
  const FavoriteMealCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = FavoriteMealCtx.ids.includes(mealId);
  console.log(mealIsFavorite);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      FavoriteMealCtx.removeFavorite(mealId);
    } else {
      FavoriteMealCtx.addFavorite(mealId);
    }
  }, [mealIsFavorite, FavoriteMealCtx, mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="#ccc"
          />
        );
      },
    });
  }, [navigation, mealIsFavorite, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Subtitle subtitle="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle subtitle="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: '#eee',
  },
  detailText: {
    color: '#ccc',
  },
  subtitleContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export default MealDetailScreen;
