import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { myValueSlice } from './myValue';
import { itemsSlice } from './myItem';
import { userSlice } from './userSlice';
import { clicksSlice } from './clicksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
    clicks: clicksSlice.reducer,
  },
});
