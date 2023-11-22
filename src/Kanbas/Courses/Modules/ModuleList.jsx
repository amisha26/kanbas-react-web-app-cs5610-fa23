import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// icons
import { CiMenuKebab } from "react-icons/ci";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDragIndicator } from "react-icons/md";
// redux store
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import { findModulesForCourse, addCourseModule, deleteCourseModule, updateCourseModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const dispatch = useDispatch();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const handleAddModule = async () => {
    await addCourseModule(courseId, module)
    dispatch(addModule({ ...module, course: courseId }))
  };

  const handleDeleteModule = async (moduleId) => {
    await deleteCourseModule(moduleId)
    dispatch(deleteModule(moduleId))
  };

  const handleUpdateModule = async (mod) => {
    await updateCourseModule(mod);
    dispatch(updateModule(mod));
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);


  /**
   * JSX
   */
  return (
    <div className="module__list">
      <li className="list-group-item">
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            style={{ padding: "0px 4px" }}
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <button
            className="btn btn-success"
            onClick= {handleAddModule}
            // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>

          <button
            className="btn btn-primary"
            onClick= {() => handleUpdateModule(module)}
            //onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
        <br />
        <textarea
          style={{ padding: "4px 6px" }}
          cols={30}
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      <br />

      <div>
        {modules
          ?.filter((module) => module.course === courseId)
          .map(({ _id, name, description, course }, idx) => (
            <div
              key={_id}
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginTop: "4px",
                }}
              >
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{course}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginTop: "4px",
                  height: "2.5rem",
                }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(setModule({ _id, name, description, course }))
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick= { () => handleDeleteModule(_id)}
                  //onClick={() => dispatch(deleteModule(_id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <br />
      {/*============ module list buttons =============== */}
      <div className="module__list__btns">
        <button className="btn btn-secondary">Collpase All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary">
          <VscPassFilled /> Publish All
        </button>
        <button className="btn btn-danger">
          <AiOutlinePlus />
          Module
        </button>
        <button className="btn btn-secondary">
          <CiMenuKebab />
        </button>
      </div>
      <hr />
      {/* module list body */}
      <div className="module__list__body">
        {modules
          ?.filter((module) => module.course === courseId)
          .map((module, index) => (
            <React.Fragment key={index}>
              {/* module list items */}
              <div className="module__list__item">
                <div className="module__list__item__head">
                  <div className="module__list__item__head__left">
                    <p>
                      <MdDragIndicator
                        style={{ fontSize: "1.5rem", marginBottom: "-.5rem" }}
                      />
                    </p>
                    <h3>{module.name}</h3>
                  </div>
                  {/* module list icons */}
                  <div className="module__list__icons">
                    <VscPassFilled
                      style={{ color: "green", fontSize: "1.5rem" }}
                    />
                    <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
                    <CiMenuKebab style={{ fontSize: "1.5rem" }} />
                  </div>
                </div>
                {/* module list description */}
                <div className="module__list__desc">{module.description}</div>
              </div>
            </React.Fragment>
          ))}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
export default ModuleList;
