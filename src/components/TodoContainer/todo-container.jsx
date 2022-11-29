import { useState } from "react";
import AddTodo from "../AddTodo/add-todo";
import Header from "../Header/header";
import Todos from "../Todos/todos";
import "./todo-container.css";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-container">
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoContainer;
