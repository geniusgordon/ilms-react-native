import React, { Component, PropTypes } from 'react';
import{ View, Text } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

class Row extends Component {
  static propTypes = {
    row: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      room: PropTypes.string,
    })),
    currentClass: PropTypes.shape({
      day: PropTypes.number,
      number: PropTypes.number,
    }),
    classNumber: PropTypes.number,
  };
  renderRow = () => {
    const { row, currentClass, classNumber } = this.props;
    return row.map((course, i) => {
      const style = [styles.cell];
      if (currentClass.day === i && currentClass.number === classNumber) {
        style.push(styles.currentClass);
      }
      if (!course) {
        return <View key={i} style={style} />;
      }
      style.push({ backgroundColor: course.color });
      return (
        <RippleView key={i} darkRipple>
          <View style={style} >
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseRoom}>{course.room}</Text>
          </View>
        </RippleView>
      );
    });
  };
  render() {
    return (
      <View style={styles.row}>
        {this.renderRow()}
      </View>
    );
  }
}

export default Row;

