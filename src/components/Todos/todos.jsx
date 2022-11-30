import TodoItem from "../TodoItem/todo-item";
import "./todos.css";

const Todos = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          id={todo.id}
          todos={todos}
          setTodos={setTodos}
          name={todo.name}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default Todos;
