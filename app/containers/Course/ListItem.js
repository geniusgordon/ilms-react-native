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
    itemType: PropTypes.string,
    item: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      courseId: PropTypes.string,
      itemId: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      dateStr: PropTypes.string,
      date: PropTypes.shape({
        year: PropTypes.string,
        month: PropTypes.string,
        day: PropTypes.string,
        hour: PropTypes.string,
        minute: PropTypes.string,
        second: PropTypes.string,
      }),
    }),
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { item, onPress } = this.props;
    onPress(item.id);
  };
  renderDate = () => {
    const { date } = this.props.item;
    return (
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemYear}>{date.year}</Text>
        <Text style={styles.listItemDay}>{date.day}</Text>
        <Text style={styles.listItemMonth}>{month[date.month - 1]}</Text>
      </View>
    );
  };
  renderCount = () => {
    const { count } = this.props.item;
    return (
      <View style={styles.listItemInfo}>
        <Text style={styles.listItemDay}>{count}</Text>
        <Text style={styles.listItemMonth}>則回應</Text>
      </View>
    );
  };
  renderInfo = () => {
    const { itemType } = this.props;
    if (itemType === 'forum') {
      return this.renderCount();
    }
    return this.renderDate();
  };
  render() {
    const { title, subtitle } = this.props.item;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.listItem}>
          {this.renderInfo()}
          <View style={styles.listItemContent}>
            <Text
              style={styles.listItemTitle}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={styles.listItemSubtitle}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {subtitle}
            </Text>
          </View>
        </View>
      </RippleView>
    );
  }
}

export default ListItem;

