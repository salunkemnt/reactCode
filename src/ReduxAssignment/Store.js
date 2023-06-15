import {createStore, applyMiddleware} from 'redux'

import {configureStore, combineReducers} from "@reduxjs/toolkit";

import formSlice from './formSlice';

const Store = configureStore({
    reducer: {
      form: formSlice,
    },
  });

export default Store;