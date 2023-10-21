import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchUsers = createAsyncThunk(
    'users/fetchAll',
    async(_, thunkAPI) =>{
        try
        {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            return response.data;
        }catch(e) {
            console.log(e);
            return "aboba";
        }
    }
);