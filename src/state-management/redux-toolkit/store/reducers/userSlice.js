import { createSlice } from "@reduxjs/toolkit";
import { FetchUsers } from "./Action-creators";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    isLoading: false,
    error: '',
    users: []
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: { 
        AddUser(state, action)
        {
            state.users.push({ id: uuidv4(), name: action.payload});
        },
        RemoveUser(state, action) {
            state.users = state.users.filter(user => user.id != action.payload);
        }
    },
    extraReducers: {
        [FetchUsers.fulfilled]: (state, action)=> {
            state.isLoading = false;
            state.error = '';
            action.payload.map((s) => { state.users.push({ id: uuidv4(), name: s.name})});
        },
        [FetchUsers.pending]: (state) => {
            state.isLoading = true;
        },
        [FetchUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default usersSlice.reducer;