import {combineReducers, configureStore} from "@reduxjs/toolkit";
import clicksReducer from "./reducers/clicksSlice";
import usersReducer from "./reducers/userSlice";

const rootReducer = combineReducers({
    clicksReducer, 
    usersReducer
});

export const store = () =>{
    return configureStore({
        reducer: rootReducer
    });
};