import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, ScrollView } from 'react-native';
import Post from './Post';
import NoData from '../Course/NoData';
import Title from '../../components/Title';
import Padding from '../../components/Padding';
import FixedActionButton from '../../components/FixedActionButton';
import { fetchForum } from './actions';
import { route } from '../App/actions';
import editIcon from '../../assets/ic_edit_white.png';
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
        <Title title="討論區" backgroundColor="#ffc107" />
        <Padding backgroundColor="#ffc107" />
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
        <FixedActionButton
          style={{ backgroundColor: '#f44336' }}
          onPress={this.handleFabPress}
        >
          <Image source={editIcon} style={{ width: 24, height: 24 }} />
        </FixedActionButton>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  forumCollection: state.course.itemsById.forum,
});

export default connect(mapStateToProps)(Forum);

