import { configureStore} from '@reduxjs/toolkit';
import importedCartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: importedCartReducer
    },
  });

  