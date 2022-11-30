import { useState } from "react";
import "./add-todo.css";
import { v4 as uuidv4 } from "uuid";
import { Button, OutlinedInput } from "@mui/material";
const AddTodo = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodoItem = () => {
    if (inputValue === "") {
      return;
    }
    setTodos([...todos, { completed: false, id: uuidv4(), name: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="add-todo">
      <OutlinedInput
        required
        placeholder="Write your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoItem();
          }
        }}
      />

      <Button variant="outlined" onClick={addTodoItem}>
        Добавить
      </Button>
    </div>
  );
};

export default AddTodo;
