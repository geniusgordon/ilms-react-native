import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import CourseListItem from './CourseListItem';
import styles from './styles';

class CourseList extends Component {
  static propTypes = {
    courseList: PropTypes.array,
  };
  renderCourseList = () => {
    const { courseList } = this.props;
    return courseList.map((course, i) => <CourseListItem key={i} course={course} />);
  };
  render() {
    return (
      <View style={styles.courseList}>
        {this.renderCourseList()}
      </View>
    );
  }
}

export default CourseList;

