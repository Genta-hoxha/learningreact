import { configureStore } from "@reduxjs/toolkit";
import editableReducer from "../reducer/reducer";

export const store = configureStore({
  reducer: {
    editable: editableReducer,
  },
});
