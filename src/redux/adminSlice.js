import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
        articleList:[
            {
                id:"0",
                title:"Empty",
                author:"alba",
                publishOrNot:false,
                normalContent:" ",
                listContent:[]
            },
           
           
        ]
    
    
}

const adminSlice =createSlice({
name:'admin',
initialState,
reducers:{
    articleEditing:(state,action)=>{
        let list = state.articleList.filter(item=>item.id != action.payload.id)
       let article = state.articleList.find(art=>art.id==action.payload.id)
       article.normalContent=action.payload.normalContent
       state.articleList=[
        article,...list
       ]
    }
}
});
//export state to global
export const adminSet = (state) => state.admin.articleList;

//export actions to global
export const {articleEditing}=adminSlice.actions;
//export reducer to global

export default adminSlice.reducer