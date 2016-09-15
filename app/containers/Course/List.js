import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
} from 'react-native';
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
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a !== b,
    });
    this.state = { dataSource };
  }
  componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    if (this.props.items !== items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    }
  }
  handleItemPress = (id) => {
    const { itemType, onItemPress } = this.props;
    onItemPress(itemType, id);
  };
  renderRow = (item) => {
    const { itemType } = this.props;
    return (
      <ListItem
        itemType={itemType}
        item={item}
        onPress={this.handleItemPress}
      />
    );
  };
  renderHeader = () => {
    const { paddingColor } = this.props;
    return <Padding backgroundColor={paddingColor} />;
  };
  render() {
    const { items, loading, paddingColor } = this.props;
    if (!items || items.length === 0 || loading) {
      return (
        <View style={styles.base}>
          <Padding backgroundColor={paddingColor} />
          <NoData loading={loading} />
        </View>
      );
    }
    return (
      <View style={styles.base}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

export default List;

