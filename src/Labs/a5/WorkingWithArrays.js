import axios from "axios";
import { useEffect, useState } from "react";


function WorkingWithArrays() {
  const API = `${process.env.REACT_APP_BASE_URL}/a5/todos`;

  const [todo, setTodo] = useState({
    id: 1,
    title: "Learn NodeJS",
    due: "2021-09-09",
    description:
      "Create a NodeJS server with ExpressJS and various RESTful APIs",
    completed: false,
  });

  const [todos, setTodos] = useState([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const deleteTodo = async (todo) => {
    await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h2>Working with Arrays</h2>
      <input value={todo.id} readOnly className="form-control" />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        value={todo.title}
        type="text"
        className="form-control"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
        className="form-control"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
        className="form-control"
      />
      <label className="form-control">
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-primary m-2">
        Post Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}, {todo.description}
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-primary m-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger m-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;