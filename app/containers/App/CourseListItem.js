import React, { Component, PropTypes } from 'react';
import DrawerItem from './DrawerItem';

class CourseListItem extends Component {
  static propTypes = {
    course: PropTypes.shape({
      name: PropTypes.string,
    }),
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { course, onPress } = this.props;
    onPress(course.id);
  };
  render() {
    const { course } = this.props;
    return (
      <DrawerItem
        onPress={this.handlePress}
        icon="copyright"
        name={course.name}
      />
    );
  }
}

export default CourseListItem;

