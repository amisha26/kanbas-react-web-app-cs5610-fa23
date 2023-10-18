import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
// icons
import { CiMenuKebab } from "react-icons/ci";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDragIndicator } from "react-icons/md";

function ModuleList() {
  const { courseId } = useParams();

  /**
   * JSX
   */
  return (
    <div className="module__list">
      {/* module list buttons */}
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
    </div>
  );
}
export default ModuleList;
