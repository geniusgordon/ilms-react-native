import React, { Component, PropTypes } from 'react';
import{ View, Text } from 'react-native';
import Cell from './Cell';
import styles from './styles';

class Row extends Component {
  static propTypes = {
    row: PropTypes.arrayOf(Cell.propTypes.course),
    currentClass: Cell.propTypes.currentClass,
    classNumber: PropTypes.number,
    onClassPress: PropTypes.func,
  };
  renderRow = () => {
    const { row, currentClass, classNumber, onClassPress } = this.props;
    return row.map((course, i) =>
      <Cell
        key={i}
        course={course}
        currentClass={currentClass}
        day={i}
        classNumber={classNumber}
        onPress={onClassPress}
      />
    );
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

