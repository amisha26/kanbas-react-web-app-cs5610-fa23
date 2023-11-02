import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CourseNavigation = () => {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  /**
   * JSX
   */
  return (
    <div className="course__nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`course__nav__links ${
            pathname.includes(link) && "course__nav__links__active"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default CourseNavigation;
