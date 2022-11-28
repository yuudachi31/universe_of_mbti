import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [
    
  ],
};

const selectTagSlice = createSlice({
  name: "selectTag",
  initialState,
  reducers: {
    setSelectedTags: (state, action) => {
      let newstate = action.payload
      state.selectedTags = [...newstate];

    },
  },
});
//export state to global，可用useSelector呼叫store
export const selectSelectTag = (state) => state.selectTag.selectedTags;

//export actions to global，可用useDispatch呼叫action
export const { setSelectedTags } = selectTagSlice.actions;

//export reducer to global
export default selectTagSlice.reducer;
