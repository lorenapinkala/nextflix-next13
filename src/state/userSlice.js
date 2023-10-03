import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    token: null,
  },

  reducers: {
    setUserCredentials: (state, action) => {
      const { _id, username, email } = action.payload.payload;
      const token = action.payload.token;
      state.user = { _id, username, email };
      state.token = token;
    },
    logOutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserCredentials, logOutUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUserAndToken = (state) => ({
  user: state.user.user,
  token: state.user.token,
});