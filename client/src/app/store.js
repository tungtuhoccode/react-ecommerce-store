import { configureStore} from '@reduxjs/toolkit';
import importedCartReducer from './cartSlice';
import importedFavouriteReducer from './favouriteSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        cart: importedCartReducer,
        favourite: importedFavouriteReducer,
        user: userSlice,
    },
  });

  