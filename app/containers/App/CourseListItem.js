import React, { Component, PropTypes } from 'react';
import { Image, View, Text } from 'react-native';
import RippleView from '../../components/RippleView';
import courseIcon from '../../assets/ic_copyright_black.png';
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
    const { course } = this.props;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.courseListItem}>
          <Image source={courseIcon} style={styles.courseIcon} />
          <Text
            style={styles.courseName}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {course.name}
          </Text>
        </View>
      </RippleView>
    );
  }
}

export default CourseListItem;

