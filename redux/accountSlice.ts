import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    firstName: undefined,
  },
  reducers: {
    changeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { changeFirstName } = accountSlice.actions;

export default accountSlice.reducer;
