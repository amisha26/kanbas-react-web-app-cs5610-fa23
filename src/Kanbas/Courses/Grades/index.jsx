import { assignments, enrollments, users, grades } from "../../Database";
import { useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignmentsList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollmentsList = enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  /**
   * JSX
   */
  return (
    <div className="grades__main">
      <div className="grades__search">
        <div className="searchBar">
          <h4>Student Names</h4>
          <AiOutlineSearch id="searchIcon" />
          <input type="text" placeholder="Search Students" />
        </div>
        <div className="searchBar1">
          <h4>Assignment Names</h4>
          <AiOutlineSearch id="searchIcon1" />
          <input type="text" placeholder="Search Assignments" />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignmentsList.map((assignment, idx) => (
                <th key={idx}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollmentsList.map((enrollment, idx) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={idx}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignmentsList.map((assignment, idx) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={idx}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
