/**
 * 
 * Configure Redux store
 * 
 */
import { configureStore } from "@reduxjs/toolkit";
// Slices
import PostsSlice from "../Screens/Posts/PostsSlice";

export default configureStore({
    reducer: {
        Posts: PostsSlice,
    }
});