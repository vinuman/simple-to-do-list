import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    {
      id: 0,
      title: "Hello World",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from",
    },
    {
      id: 1,
      title: "createReducer()",
      content:
        "hat lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.",
    },
    {
      id: 2,
      title: "createAsyncThunk",
      content:
        "accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, editTitle, editContent } = action.payload;
      const taskIndex = state.taskList.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.taskList[taskIndex].id = taskIndex;
        state.taskList[taskIndex].title = editTitle;
        state.taskList[taskIndex].content = editContent;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.taskList.splice(id, 1);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
