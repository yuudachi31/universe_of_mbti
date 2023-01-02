import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleList: [
    {
      id: "0",
      title: "Empty",
      author: "alba",
      publishOrNot: false,
      normalContent: " ",
      listContent: [],
    },
    {
      id: "1",
      title: "Empty",
      author: "alba2",
      publishOrNot: false,
      normalContent: "aaaa ",
      listContent: [],
    },
  ],
  adminIslogin:false,
  accessToken:""
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    articleEditing: (state, action) => {
      const list = state.articleList.filter(
        (item) => item.id != action.payload.id
      );
      const article = state.articleList.find(
        (art) => art.id == action.payload.id
      );
      article.normalContent = action.payload.normalContent;
      state.articleList = [article, ...list];
    },
    adminToLogin:(state, action)=>{
      state.adminIslogin=true;
      state.accessToken=action.payload;
    },
    adminLogout:(state, action)=>{
      state.adminIslogin=false;
      state.accessToken="";
    }
  },
});
//export state to global，可用useSelector呼叫store
export const selectadmin = (state) => state.admin.articleList;
export const selectToken = (state) => state.admin.accessToken;
export const selectAdminIsLogin = (state)=> state.admin.adminIslogin;
//export actions to global，可用useDispatch呼叫action
export const { articleEditing, adminToLogin,adminLogout} = adminSlice.actions;

//export reducer to global
export default adminSlice.reducer;
