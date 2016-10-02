import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

class Cell extends Component {
  static propTypes = {
    course: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      room: PropTypes.string,
    }),
    currentClass: PropTypes.shape({
      day: PropTypes.number,
      number: PropTypes.number,
    }),
    day: PropTypes.number,
    classNumber: PropTypes.number,
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { course, onPress } = this.props;
    onPress(course.id);
  };
  render() {
    const { course, currentClass, day, classNumber } = this.props;
    const style = [styles.cell];
    if (currentClass.day === day && currentClass.number === classNumber) {
      style.push(styles.currentClass);
    }
    if (!course) {
      return <View key={day} style={style} />;
    }
    style.push({ backgroundColor: course.color });
    return (
      <RippleView key={day} onPress={this.handlePress} darkRipple>
        <View style={style} >
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseRoom}>{course.room}</Text>
        </View>
      </RippleView>
    );
  }
}

export default Cell;

