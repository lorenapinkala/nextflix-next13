import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    data: {
      _id: null,
      username: "",
      email: "",
    },
  },

  reducers: {
    setUserCredentials: (state, action) => {
      const { _id, username, email, token } = action.payload;
      state.data.user = { _id, username, email };
      state.data.token = token;
    },
    logOutUser: (state) => {
      state.data.user = {
        _id: null,
        username: "",
        email: "",
      };
      localStorage.removeItem("token");
    },
  },
});

export const { setUserCredentials, logOutUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUserAndToken = (state) => ({
  user: state.user.data.user,
  token: state.user.data.token,
});
