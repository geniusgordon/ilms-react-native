import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from './ListItem';
import NoData from './NoData';
import Padding from '../../components/Padding';
import styles from './styles';

class List extends Component {
  static propTypes = {
    paddingColor: PropTypes.string,
    itemType: PropTypes.string,
    items: PropTypes.array,
    loading: PropTypes.bool,
    onItemPress: PropTypes.func,
  };
  handleItemPress = (id) => {
    const { itemType, onItemPress } = this.props;
    onItemPress(itemType, id);
  };
  renderList = () => {
    const { itemType, items, loading } = this.props;
    if (items.length === 0) {
      return <NoData loading={loading} />;
    }
    return items.map((item, i) => (
      <ListItem
        key={i}
        itemType={itemType}
        item={item}
        onPress={this.handleItemPress}
      />
    ));
  };
  render() {
    const { paddingColor } = this.props;
    return (
      <View style={styles.base}>
        <ScrollView>
          <Padding backgroundColor={paddingColor} />
          <View style={styles.list}>
            {this.renderList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default List;

