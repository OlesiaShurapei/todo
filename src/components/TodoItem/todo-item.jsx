import "./todo-item.css";

const TodoItem = ({ id, name, todos, setTodos }) => {
  const onDeleteButton = (e) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
  };
  return (
    <div className="todo-item">
      <span>{name}</span>
      <button className="delete-button" onClick={onDeleteButton}>
        удалить
      </button>
    </div>
  );
};

export default TodoItem;
