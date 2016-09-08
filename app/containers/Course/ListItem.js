import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

const month = [
  'JAN', 'FEB', 'MAY', 'APR', 'MAR', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { item, onPress } = this.props;
    onPress(item.id);
  };
  renderDate = () => {
    const { date } = this.props.item;
    return (
      <View style={styles.listItemDate}>
        <Text style={styles.listItemYear}>{date.year}</Text>
        <Text style={styles.listItemDay}>{date.day}</Text>
        <Text style={styles.listItemMonth}>{month[date.month - 1]}</Text>
      </View>
    );
  };
  render() {
    const { title } = this.props.item;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.listItem}>
          {this.renderDate()}
          <Text style={styles.listItemTitle}>{title}</Text>
        </View>
      </RippleView>
    );
  }
}

export default ListItem;

