import "./todo-item.css";
import { useState } from "react";
import { Checkbox, Button } from "@mui/material";
const TodoItem = ({ id, name, completed, todos, setTodos }) => {
  const [checked, setChecked] = useState(completed);
  const onDeleteButton = () => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-item">
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <span className={`todo-name ${checked ? "completed" : ""}`}>{name}</span>
      <Button
        variant="contained"
        // startIcon={<DeleteIcon />}
        onClick={onDeleteButton}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
