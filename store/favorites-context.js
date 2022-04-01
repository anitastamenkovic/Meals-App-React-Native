import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

const FavoritesContextProvider = ({children}) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealsIds(prevFavorites => [...prevFavorites, id]);
  };

  const removeFavorite = id => {
    setFavoriteMealsIds(prevFavorites =>
      prevFavorites.filter(mealId => mealId !== id),
    );
  };

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;