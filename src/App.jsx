import React from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/nav" element={<Navbar />}>
          <Route path="/nav" element={<h1>thisis about</h1>} />
          <Route path="/nav/about" element={<h1>thisis about</h1>} />
          <Route path="/nav/test" element={<h1>thisis test</h1>} />
        </Route>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes> */}
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

export default App;
