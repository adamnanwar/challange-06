import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[],
    postDetail: null,
    search:[],
};

const postSlicer = createSlice({
    name:'post',
    initialState,
    reducers:{
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPostDetails: (state, action) => {
            state.postDetail = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    }  
})

export const {setPosts, setPostDetails, setSearch} = postSlicer.actions;

export default postSlicer.reducer;