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
  renderSubtitle = () => {
    const { itemType, item } = this.props;
    if (itemType !== 'forum') {
      return null;
    }
    return <Text style={styles.listItemSubtitle}>{item.lastEdit}</Text>;
  };
  render() {
    const { title } = this.props.item;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.listItem}>
          {this.renderInfo()}
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>{title}</Text>
            {this.renderSubtitle()}
          </View>
        </View>
      </RippleView>
    );
  }
}

export default ListItem;

