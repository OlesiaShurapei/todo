import { useState } from "react";
import "./add-todo.css";
import { v4 as uuidv4 } from "uuid";
const AddTodo = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodoItem = () => {
    setTodos([...todos, { id: uuidv4(), name: inputValue }]);
  };

  return (
    <div className="add-todo">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addTodoItem}>Добавить </button>
    </div>
  );
};

export default AddTodo;
