import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./features/postSlice"

export const store = configureStore({
    reducer:{
        post:postReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch