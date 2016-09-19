import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  RefreshControl,
} from 'react-native';
import ListItem from './ListItem';
import NoData from './NoData';
import Padding from '../../components/Padding';
import styles from './styles';

class List extends Component {
  static propTypes = {
    paddingColor: PropTypes.string,
    itemType: PropTypes.string,
    page: PropTypes.number,
    more: PropTypes.bool,
    items: PropTypes.arrayOf(ListItem.propTypes.item),
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    onItemPress: PropTypes.func,
    onRefresh: PropTypes.func,
    fetchMoreItems: PropTypes.func,
  };
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a !== b,
    });
    const items = props.items || [];
    this.state = { dataSource: dataSource.cloneWithRows(items) };
  }
  componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    if (this.props.items !== items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
      });
    }
  }
  handleRefresh = () => {
    const { itemType, onRefresh } = this.props;
    if (onRefresh) {
      onRefresh(itemType);
    }
  };
  handleEndReached = () => {
    const { itemType, loading, page, more, fetchMoreItems } = this.props;
    if (!loading && more && fetchMoreItems) {
      fetchMoreItems(itemType, page + 1);
    }
  };
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
  renderFooter = () => {
    const { items, loading } = this.props;
    if (!items || items.length === 0 || loading) {
      return <NoData loading={loading} />;
    }
    return null;
  };
  render() {
    const { refreshing } = this.props;
    return (
      <View style={styles.base}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
          renderFooter={this.renderFooter}
          onEndReached={this.handleEndReached}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.handleRefresh}
            />
          }
          enableEmptySections
        />
      </View>
    );
  }
}

export default List;

