const { createSlice } = require('@reduxjs/toolkit');

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update: state => {
      state.value += 1;
    },
  },
});
export const { update } = clicksSlice.actions;
console.log(update);
