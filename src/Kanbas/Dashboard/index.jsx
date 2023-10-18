import React from "react";
import { Link } from "react-router-dom";
// icons
import { CiMenuKebab } from "react-icons/ci";
// data
import { courses } from "../Database/index.js";

const Dashboard = () => {
  /**
   * JSX
   */
  return (
    <div className="dash__main">
      {/* header  */}
      <div className="dash_header">
        <p>Dashboard</p>
        <CiMenuKebab
          style={{
            fontSize: "2rem",
          }}
        />
      </div>
      <hr /> 
      {/* sub-header  */}
      <div className="dash_subheader">
        <p>Published Courses</p>
      </div>
      <hr />
      {/* courses card  */}
      <div className="card__grid">
        {courses?.map(({ _id, name, number, startDate }, idx) => (
          <div className="card__main" key={idx}>
            <div className="card__top"></div>
            <div className="card__text">
              <Link to={`/Kanbas/Courses/${_id}`} className="card__course">
                {number}
              </Link>
              <p className="card__course__text">
                {name}_{startDate}
              </p>
              <div className="card__icons">
                {["1", "2", ""].map((icon, idx) => (
                  <p key={idx}>{icon}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
