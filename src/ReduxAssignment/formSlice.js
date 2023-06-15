import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.formData = [...state.formData, action.payload];
      // console.log(state, action);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const userIndex = state.formData.findIndex((user) => user.email === updatedUser.email);
      if (userIndex !== -1) {
        state.formData[userIndex] = updatedUser;
      }
    },
    deleteUser: (state, action) => {
      const email = action.payload;
      // state.formData = state.formData.filter((user) => user.id !== userId);
      state.formData = state.formData.filter((user) => user.email !== email);
    },
    deleteTable: (state, action) => {
      state.formData = [];
    },
  }
});

export const { setUserData, updateUser, deleteUser, deleteTable } = userSlice.actions;
export default userSlice.reducer;