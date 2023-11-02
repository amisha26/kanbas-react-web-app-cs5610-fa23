import React from "react";
import { Link } from "react-router-dom";
// icons
import { CiMenuKebab } from "react-icons/ci";

const Dashboard = ({
  input,
  enableEdit,
  handleChange,
  handleAddCourse,
  handleEnableEdit,
  handleUpdate,
  handleDelete,
  course,
}) => {
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
      <div>
        <div className="DASH__INPUT">
          <input
            type="text"
            id="inputField"
            placeholder="New Course"
            value={input.inputField}
            onChange={handleChange}
          />
          <button className="btn btn-success" onClick={handleAddCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
        {enableEdit && (
          <div style={{ marginTop: "5px", display: "flex", gap: "6px" }}>
            <input
              type="text"
              id="name"
              placeholder="New Course"
              value={input.name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="number"
              placeholder="Number"
              value={input.number}
              onChange={handleChange}
            />{" "}
            <input
              type="text"
              id="startDate"
              placeholder="Start Date"
              value={input.startDate}
              onChange={handleChange}
            />{" "}
            <input
              type="text"
              id="endDate"
              placeholder="End Date"
              value={input.endDate}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="DASH__MAIN__LIST">
          {course.map(({ name, _id }, idx) => (
            <div key={_id} className="DASH__LIST__INPUT">
              <Link
                to={`/Kanbas/Courses/${_id}`}
                className="card__course"
                id="DASH__ID__NAME"
              >
                {name}
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => handleEnableEdit(_id, name)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />

      {/* courses card  */}
      <div className="card__grid">
        {course?.map(({ _id, name, number, startDate }, idx) => (
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
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
