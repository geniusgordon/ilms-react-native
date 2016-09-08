import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

class CourseListItem extends Component {
  static propTypes = {
    course: PropTypes.object,
  };
  render() {
    const { course } = this.props;
    return (
      <RippleView darkRipple>
        <View style={styles.courseListItem}>
          <Text>{course.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default CourseListItem;

