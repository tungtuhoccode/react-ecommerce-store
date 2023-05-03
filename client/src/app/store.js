import { configureStore} from '@reduxjs/toolkit';
import importedCartReducer from './cartSlice';
import importedFavouriteReducer from './favouriteSlice';

export const store = configureStore({
    reducer: {
        cart: importedCartReducer,
        favourite: importedFavouriteReducer
    },
  });

  