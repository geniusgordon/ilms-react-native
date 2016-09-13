import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Post from './Post';
import NoData from '../Course/NoData';
import Title from '../../components/Title';
import Padding from '../../components/Padding';
import { fetchForum } from './actions';
import { route } from '../App/actions';
import styles from './styles';

class Forum extends Component {
  static propTypes = {
    id: PropTypes.string,
    courseId: PropTypes.string,
    forumCollection: PropTypes.object,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(fetchForum(id));
  }
  handleFabPress = () => {
    const { id, courseId, forumCollection, dispatch } = this.props;
    const forum = forumCollection[id] || {};
    dispatch(route('compose', {
      action: 'reply',
      title: forum.title,
      courseId,
      postId: id,
    }));
  };
  renderList = () => {
    const { id, forumCollection } = this.props;
    const forum = forumCollection[id] || {};
    const posts = forum.posts || [];
    if (posts.length === 0) {
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
        <StatusBar barStyle='light-content' backgroundColor="#1565c0" />
        <Title title="討論區" backgroundColor="#1e88e5" />
        <Padding backgroundColor="#1e88e5" />
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
        <ActionButton
          buttonColor="#f44336"
          icon={<Icon name="edit" size={24} color="#fff" />}
          onPress={this.handleFabPress}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  forumCollection: state.course.itemsById.forum,
});

export default connect(mapStateToProps)(Forum);

