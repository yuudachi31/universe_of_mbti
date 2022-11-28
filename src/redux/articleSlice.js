import { createSlice } from "@reduxjs/toolkit";
import articleListJson from "../json/articleList.json"
const initialState = {
  articleList: [...articleListJson]
  ,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticleList: (state, action) => {
      let newstate = action.payload
      state.articleList = [...newstate];

    },
  },
});
//export state to global，可用useSelector呼叫store
export const selectArticle = (state) => state.article.articleList;

//export actions to global，可用useDispatch呼叫action
export const { setArticleList } = articleSlice.actions;

//export reducer to global
export default articleSlice.reducer;
