import { connect } from 'react-redux';
import Timetable from './Timetable';
import { weekday, classNumber, classTime } from './const';

const getCourseList = ({ courseById, courseList }) => (
  courseList.current.map(id => courseById[id])
);

const getTimetable = (courseList) => {
  const timetable = [];
  for (let i = 0; i < 13; i += 1) {
    timetable.push([]);
    for (let j = 0; j < 6; j += 1) {
      timetable[i].push(null);
    }
  }
  courseList.forEach((course) => {
    if (course.time) {
      course.time.match(/\w\d/g).forEach((time) => {
        const day = weekday.indexOf(time.charAt(0));
        const number = classNumber.indexOf(time.charAt(1));
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

const mapStateToProps = (state) => {
  const courseList = getCourseList(state.course);
  const currentClass = getCurrentClass();
  return {
    timetable: getTimetable(courseList),
    loading: state.timetable.loading,
    currentClass,
  };
};

export default connect(mapStateToProps)(Timetable);

