//import Nav from "../Nav";
//import Assignment3 from "./a3";
import Assignment4 from "./a4";
import AddRedux from "./a4/ReduxExamples/AddRedux";
import CounterRedux from "./a4/ReduxExamples/CounterRedux";
import HelloRedux from "./a4/ReduxExamples/HelloRedux";
import TodoList from "./a4/ReduxExamples/todos/TodoList";
//import { Routes, Route, Navigate } from "react-router";
import store from "./store/index";
import { Provider } from "react-redux";
import Assignment5 from "./a5"


function Labs() {
  return (
    <Provider store={store}>
        <div className="container">
        <h1>Labs</h1>
        {/* <Assignment4 />
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList/> */}
        <Assignment5 />
      </div>
    </Provider>

  );
}

export default Labs;