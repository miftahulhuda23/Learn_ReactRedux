import React from "react";
import AddTodo from "./Component/AddTodo/AddTodo";
import TodoList from "./Component/TodoList/TodoList";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
