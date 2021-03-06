import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import CourseListItem from './CourseListItem';

class CourseList extends Component {
  static propTypes = {
    courseList: PropTypes.arrayOf(CourseListItem.propTypes.course),
    onCoursePress: PropTypes.func,
  };
  renderCourseList = () => {
    const { courseList, onCoursePress } = this.props;
    return courseList.map((course, i) => (
      <CourseListItem
        key={i}
        course={course}
        onPress={onCoursePress}
      />
    ));
  };
  render() {
    return (
      <View>
        {this.renderCourseList()}
      </View>
    );
  }
}

export default CourseList;

