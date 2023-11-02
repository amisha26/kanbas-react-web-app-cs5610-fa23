import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// data
import { courses } from "./Database/index.js";
import store from "./store";
import { Provider } from "react-redux";

const defaultInputState = { inputField: "" };

function Kanbas() {
  const [course, setCourse] = useState(courses);
  const [input, setInput] = useState({});
  const [courseId, setCourseId] = useState();
  const [enableEdit, setEnableEdit] = useState(false);

  // input handle change
  const handleChange = ({ target }) => {
    setInput((prev) => {
      return { ...prev, [target.id]: target.value };
    });
  };

  // add course handle
  const handleAddCourse = () => {
    setCourse((state) => {
      const newCourse = {
        _id: new Date().getTime().toString(),
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
      };

      return [...state, newCourse];
    });

    setInput(defaultInputState);
  };

  // edit course name handle
  const handleEnableEdit = (id, name) => {
    setEnableEdit(true);

    setInput(() => {
      const data = course.find(({ _id }) => _id === id);
      return {
        name: data.name,
        number: data.number,
        startDate: data.startDate,
        endDate: data.endDate,
      };
    });
    setCourseId(id);
  };

  // update course handle
  const handleUpdate = () => {
    setCourse((state) => {
      const data = state.map((item) => {
        if (item._id === courseId) {
          const { name, number, startDate, endDate } = input;
          return { ...item, name, number, startDate, endDate };
        }
        return item;
      });
      return data;
    });
    setEnableEdit(false);
  };

  // delete course handle
  const handleDelete = (id) => {
    setCourse((state) => {
      return state.filter((item) => item._id !== id);
    });
  };

  return (
    <div>
      <Provider store={store}>
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route
              path="Account"
              element={
                <div style={{ float: "right", width: "calc(100% -  130px)" }}>
                  Account
                </div>
              }
            />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  course={course}
                  input={input}
                  enableEdit={enableEdit}
                  handleChange={handleChange}
                  handleAddCourse={handleAddCourse}
                  handleEnableEdit={handleEnableEdit}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </Provider>
    </div>
  );
}

export default Kanbas;
