import { createSlice } from '@reduxjs/toolkit'

export const PostsSlice = createSlice({
  name: 'Posts',
  initialState: {
    SelectedPost:'',
    
  },
  reducers: {
    setSelectedPost: (state, action) => {
      const SelectedPost = action.payload;
      state.SelectedPost = SelectedPost;
    },

 
  }
})

// Action creators are generated for each case reducer function
export const {
  setSelectedPost,
} = PostsSlice.actions;
export default PostsSlice.reducer 
