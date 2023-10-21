import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: '',
    clicks: 0
};

export const clicksSlice = createSlice({
    name: "clicks",
    initialState,
    reducers:{
        increment(state, action ){
            state.clicks += action.payload
        },
        decrement(state, action) {
            state.clicks -= action.payload
        }
    }
});

export default clicksSlice.reducer;