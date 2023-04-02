import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const clicksSlice = createSlice({
  name: 'clicksValue',
  initialState: { value: 0, a: 1, b: 2, C: 3 },
  reducers: {
    // update: state => {
    //   state.value += 1;
    // },
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value', 'a'], // only navigation will be persisted
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;
// console.log(update);

//Selectors
export const getClicksValue = state => state.clicks.value;
