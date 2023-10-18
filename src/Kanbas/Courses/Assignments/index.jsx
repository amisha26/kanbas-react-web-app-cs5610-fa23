import React from "react";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
// icons
import { CiMenuKebab } from "react-icons/ci";
import { VscPassFilled } from "react-icons/vsc";
import { MdDragIndicator } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";

function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  /**
   * JSX
   */
  return (
    <div className="assis__main">
      <div className="assignment__topbar">
        <input type="text" placeholder="Search For Assignments" />
        <div>
          <button className="btn btn-secondary">Group</button>
          <button className="btn btn-danger">Assignment</button>
          <button className="btn btn-secondary">
            <CiMenuKebab />
          </button>
        </div>
      </div>
      <div className="assis__main__header">
        <div className="assis__main__header__left">
          <MdDragIndicator />
          <div>Assignments for course {courseId}</div>
        </div>
        <div className="assis__main__header__right">
          <p className="assis__main__total">40% of Total</p>
          <p>
            {" "}
            <CiMenuKebab style={{ fontSize: "1.3rem" }} />
          </p>
        </div>
      </div>
      <div className="assis__list">
        {courseAssignments.map((assignment) => (
          <div className="assis__item">
            <div className="assis__item__left">
              <MdDragIndicator />
              <BiSolidNotepad style={{ color: "green" }} />
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="assis__links"
              >
                {assignment.title}
              </Link>
            </div>
            <div className="assis__item__right">
              <VscPassFilled style={{ color: "green" }} />
              <CiMenuKebab />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
