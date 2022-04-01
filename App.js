import React from 'react';
import type {Node} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import FavoritesContextProvider from './store/favorites-context';

const App: () => Node = () => {
  return (
    <FavoritesContextProvider>
      <AppNavigation />
    </FavoritesContextProvider>
  );
};

export default App;
