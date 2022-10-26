import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import adminReducer from './adminSlice'
const store = configureStore({
    reducer:{
        admin:adminReducer
    },
    devTools:process.env.NODE_ENV !== 'admin'
});

export default store;