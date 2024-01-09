import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo Slice",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id != action.payload);
    },
  },
});
console.log(todoSlice);
const todoReducer = todoSlice.reducer;
export default todoReducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
