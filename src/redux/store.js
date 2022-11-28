import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './adminSlice'
import selectTagReducer from './selectTagSlice'
import articleReducer from './articleSlice'
const store = configureStore({
    reducer:{
        admin:adminReducer,
        selectTag:selectTagReducer,
        article:articleReducer,
    },
    devTools:process.env.NODE_ENV !== 'admin'
});

export default store;