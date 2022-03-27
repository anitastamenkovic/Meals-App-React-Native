import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview');
    };
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData?.item?.title}
        color={itemData?.item?.color}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.screen}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#24180f',
  },
});

export default CategoriesScreen;
