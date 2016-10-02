import React, { Component, PropTypes } from 'react';
import{ View, Text } from 'react-native';
import styles from './styles';

const weekday = ['MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

class Row extends Component {
  renderRow = () => {
    return weekday.map(day =>
      <View key={day} style={styles.cell}>
        <Text>QQ</Text>
      </View>
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

