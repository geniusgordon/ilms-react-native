import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
  };
  renderDate = () => {
    // const { date } = this.props;
    return (
      <View style={styles.listItemDate}>
        <Text style={styles.listItemYear}>2016</Text>
        <Text style={styles.listItemDay}>08</Text>
        <Text style={styles.listItemMonth}>SEP</Text>
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

