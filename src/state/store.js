import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userSlice,
    //favorites: favoriteSlice
  },
  middleware: [thunk], 
});

export default store;
