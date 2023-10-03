import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from "redux-thunk";
import userSlice from './userSlice';

const store = configureStore({

    reducer: {
        user: userSlice,
        //favorites: favoriteSlice
      },
      middleware: [thunkMiddleware],

});

export default store;