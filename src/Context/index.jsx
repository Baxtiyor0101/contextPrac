import { createContext, useState } from "react";
export const TodoContext = createContext([]);
export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  
  function addTodo(newTodo) {
    setTodo([...todo, newTodo]);
  }
  function saveTodo(obj) {
    console.log(obj.title);
    let newTodo = todo.map((val) => {
      if (val.id == obj.id) {
        val.title = obj.title;
        return val;
      }
      return val;
    });
    setTodo(newTodo);
  }
  return (
    <TodoContext.Provider value={{ todo, addTodo,saveTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
