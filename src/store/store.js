import { configureStore } from "@reduxjs/toolkit";
import couterReducer  from  "../features/Couter/couterSlice"
const rootReducer ={
    couter: couterReducer
}

const store = configureStore({
    reducer: rootReducer,
})
export default store;