import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, ScrollView } from 'react-native';
import Post from './Post';
import NoData from '../Course/NoData';
import { fetchForum } from './actions';
import styles from './styles';

class Forum extends Component {
  static propTypes = {
    id: PropTypes.string,
    forumCollection: PropTypes.object,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(fetchForum(id));
  }
  renderList = () => {
    const { id, forumCollection } = this.props;
    const forum = forumCollection[id];
    if (!forum) {
      return <NoData />;
    }
    return forum.posts.map((post) => (
      <Post key={post.id} post={post} />
    ));
  };
  render() {
    const { id, forumCollection } = this.props;
    const forum = forumCollection[id] || {};
    return (
      <View style={styles.base}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>討論區</Text>
        </View>
        <View style={styles.padding} />
        <View style={styles.list}>
          <View style={styles.forumTitleContainer}>
            <Text style={styles.forumTitle}>{forum.title}</Text>
          </View>
          <ScrollView>
            <View>
              {this.renderList()}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  forumCollection: state.course.itemsById.forum,
});

export default connect(mapStateToProps)(Forum);

