import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  RefreshControl,
} from 'react-native';
import Post from './Post';
import styles from './styles';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
  };
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (a, b) => a !== b,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.posts),
    };
  }
  componentWillReceiveProps(nextProps) {
    const { posts } = nextProps;
    if (this.props.posts !== posts) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(posts),
      });
    }
  }
  handleRefresh = () => {
    this.props.onRefresh();
  };
  renderRow(post, s, i) {
    const floor = parseInt(i, 10);
    return <Post post={post} floor={floor} />;
  }
  render() {
    const { refreshing } = this.props;
    return (
      <View style={styles.base}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.handleRefresh}
            />
          }
        />
      </View>
    );
  }
}

export default PostList;

