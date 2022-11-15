import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';


export const getPosts = createAsyncThunk("posts/getPosts", async () => {

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return res.data;


})

interface UsersState {
    posts: [];
    loading: boolean;
    error: string
}

const initialState = {
    posts: [],
    loading: false,
    error: ""
} as UsersState

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.loading = true;
        })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state) => {
                state.loading = false;
                state.error = "Error";
            })
    }
})

export const getPostValue = (state:RootState) => state.post.posts;

export default postSlice.reducer;