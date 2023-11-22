import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

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