import { configureStore } from "@reduxjs/toolkit";
import addTaskReducer from "../features/taskSlice";

const store = configureStore({
  reducer: {
    task: addTaskReducer,
  },
});

export default store;
