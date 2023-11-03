//import Nav from "../Nav";
//import Assignment3 from "./a3";
import Assignment4 from "./a4";
import AddRedux from "./a4/ReduxExamples/AddRedux";
import CounterRedux from "./a4/ReduxExamples/CounterRedux";
import HelloRedux from "./a4/ReduxExamples/HelloRedux";
//import { Routes, Route, Navigate } from "react-router";
import store from "./store/index";
import { Provider } from "react-redux";


function Labs() {
  return (
    <Provider store={store}>
        <div className="container">
        <h1>Labs</h1>
        <Assignment4 />
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
      </div>
    </Provider>

  );
}

export default Labs;