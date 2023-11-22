import axios from "axios";

const COURSES_URL = "https://kanbas-node-server-app1-cm1b.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app1-cm1b.onrender.com/api/assignments";

export const addCourseAssignment = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    module
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const updateCourseAssignment = async (assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteCourseAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};