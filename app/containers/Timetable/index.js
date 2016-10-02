import { connect } from 'react-redux';
import Timetable from './Timetable';

const weekday = ['M', 'T', 'W', 'R', 'F', 'S'];
const classTime = [
  { from: [8, 0], to: [9, 0] },
  { from: [9, 0], to: [10, 0] },
  { from: [10, 0], to: [11, 10] },
  { from: [11, 10], to: [12, 10] },
  { from: [12, 10], to: [13, 10] },
  { from: [13, 10], to: [14, 20] },
  { from: [14, 20], to: [15, 20] },
  { from: [15, 20], to: [16, 30] },
  { from: [16, 30], to: [17, 30] },
  { from: [17, 30], to: [18, 30] },
  { from: [18, 30], to: [19, 30] },
  { from: [19, 30], to: [20, 30] },
  { from: [20, 30], to: [21, 20] },
];

const getCourseList = ({ courseById, courseList }) => (
  courseList.current.map(id => courseById[id])
);

const getTimetable = (courseList) => {
  const timetable = [];
  for (let i = 0; i < 13; i++) {
    timetable.push([]);
    for (let j = 0; j < 6; j++) {
      timetable[i].push(null);
    }
  }
  courseList.forEach(course => {
    if (course.time) {
      course.time.match(/\w\d/g).forEach(time => {
        const day = weekday.indexOf(time.charAt(0));
        const number = parseInt(time.charAt(1), 10) - 1;
        timetable[number][day] = course;
      });
    }
  });
  return timetable;
};

const getCurrentClass = () => {
  const now = new Date();
  const day = now.getDay() - 1;
  const hour = now.getHours();
  const minute = now.getMinutes();
  let currentClassNumber = -1;
  classTime.forEach(({ from, to }, i) => {
    if (
      (hour === from[0] && minute >= from[1]) ||
      (hour === to[0] && minute <= to[1])
    ) {
      currentClassNumber = i;
    }
  });
  return {
    day,
    number: currentClassNumber,
  };
};

const mapStateToProps = state => {
  const courseList = getCourseList(state.course);
  const currentClass = getCurrentClass();
  return {
    timetable: getTimetable(courseList),
    loading: state.timetable.loading,
    currentClass,
  }
};

export default connect(mapStateToProps)(Timetable);

