import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
} from 'react-native';
import Post from './Post';
import styles from './styles';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array,
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
  renderRow(post, s, i) {
    const floor = parseInt(i, 10);
    return <Post post={post} floor={floor} />;
  }
  render() {
    return (
      <View style={styles.base}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default PostList;

