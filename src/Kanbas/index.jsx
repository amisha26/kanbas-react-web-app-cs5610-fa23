import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// data
//import { courses } from "./Database/index.js";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";



const defaultInputState = { inputField: "" };

function Kanbas() {
  //const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
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
  const handleAddCourse = async () => {
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

    await client.addCourse({
      _id: new Date().getTime().toString(),
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
    }
);

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
  const handleUpdate = async () => {
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
    await client.updateCourse({...input, _id: courseId});
    setEnableEdit(false);
  };

  // delete course handle
  const handleDelete = async (id) => {
    await client.deleteCourse(id);
    setCourse((state) => {
      return state.filter((item) => item._id !== id);
    });
  };
  

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await client.fetchCourses();
      setCourse(courses);
    };
    fetchCourses();
  }, []);

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
              element={<Courses courses={course} />}
            />
          </Routes>
        </div>
      </Provider>
    </div>
  );
}

export default Kanbas;
