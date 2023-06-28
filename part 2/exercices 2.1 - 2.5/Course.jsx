import React from 'react';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <TotalExercises total={totalExercises} />
    </div>
  );
};

const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  );
};

const TotalExercises = ({ total }) => {
  return (
    <p>Total number of exercises: {total}</p>
  );
};

export default Course;
