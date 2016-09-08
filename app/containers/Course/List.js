import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from './ListItem';
import NoData from './NoData';
import styles from './styles';

class List extends Component {
  static propTypes = {
    itemType: PropTypes.string,
    items: PropTypes.array,
  };
  renderList = () => {
    const { items } = this.props;
    if (items.length === 0) {
      return <NoData />;
    }
    return items.map(({ id, title, date }) => (
      <ListItem key={id} title={title} date={date} />
    ));
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.padding} />
        <View style={styles.list}>
          {this.renderList()}
        </View>
      </ScrollView>
    );
  }
}

export default List;

