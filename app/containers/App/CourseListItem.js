import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

class CourseListItem extends Component {
  static propTypes = {
    course: PropTypes.object,
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { course, onPress } = this.props;
    onPress(course.id);
  };
  render() {
    const { course, onPress } = this.props;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.courseListItem}>
          <Text>{course.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default CourseListItem;

