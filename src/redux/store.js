import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { myValueSlice } from './myValue';
import { itemsSlice } from './myItem';
import { userSlice } from './userSlice';
import { clicksSlice } from './clicksSlice';

import { clicksReducer } from './clicksSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    clicksValue: clicksSlice.reducer,

    clicks: clicksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
