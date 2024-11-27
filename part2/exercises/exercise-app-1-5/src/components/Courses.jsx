import Course from "./Course";

const Courses = ({ courses }) => {
  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  );
};

export default Courses;
