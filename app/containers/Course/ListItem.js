import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const month = [
  'JAN', 'FEB', 'MAY', 'APR', 'MAR', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

const leftPad = (str) => {
  return String(str).length < 2 ? `0${str}` : str;
};

class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.object,
  };
  renderDate = () => {
    const { date } = this.props;
    return (
      <View style={styles.listItemDate}>
        <Text style={styles.listItemYear}>{date.getFullYear()}</Text>
        <Text style={styles.listItemDay}>{leftPad(date.getDate())}</Text>
        <Text style={styles.listItemMonth}>{month[date.getMonth()]}</Text>
      </View>
    );
  };
  render() {
    const { title } = this.props;
    return (
      <View style={styles.listItem}>
        {this.renderDate()}
        <Text style={styles.listItemTitle}>{title}</Text>
      </View>
    );
  }
}

export default ListItem;

