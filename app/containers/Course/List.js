import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from './ListItem';
import NoData from './NoData';
import styles from './styles';

class List extends Component {
  static propTypes = {
    itemType: PropTypes.string,
    items: PropTypes.array,
    onItemPress: PropTypes.func,
  };
  handleItemPress = (id) => {
    const { itemType, onItemPress } = this.props;
    onItemPress(itemType, id);
  };
  renderList = () => {
    const { items } = this.props;
    if (items.length === 0) {
      return <NoData />;
    }
    return items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        onPress={this.handleItemPress}
      />
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

