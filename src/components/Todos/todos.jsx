import TodoItem from "../TodoItem/todo-item";
import "./todos.css";

const Todos = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {Array.isArray(todos) &&
        todos.length > 0 &&
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            name={todo.name}
          />
        ))}
    </div>
  );
};

export default Todos;
