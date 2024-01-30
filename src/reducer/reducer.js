import { createSlice } from "@reduxjs/toolkit";

const editableSlice = createSlice({
  name: "editable",
  initialState: {
    text: "Default Text",
    imageUrl: "images/plus.png",
  },
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
    },
    updateImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { updateText, updateImageUrl } = editableSlice.actions;
export default editableSlice.reducer;
