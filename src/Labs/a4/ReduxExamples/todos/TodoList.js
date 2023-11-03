import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
