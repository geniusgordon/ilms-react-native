import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import BaseLayout from '../App/BaseLayout';
import PostList from './PostList';
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
    forum: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      posts: PostList.propTypes.posts,
    }),
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch(fetchForum(id));
  }
  handleRefresh = () => {
    const { id, dispatch } = this.props;
    dispatch(fetchForum(id, { refresh: true }));
  };
  handleFabPress = () => {
    const { id, courseId, forum, dispatch } = this.props;
    dispatch(route('compose', {
      action: 'reply',
      title: forum.title,
      courseId,
      postId: id,
    }));
  };
  renderList = () => {
    const { forum, loading, refreshing } = this.props;
    const posts = forum.posts || [];
    if (posts.length === 0) {
      return <NoData />;
    }
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    return (
      <PostList
        posts={posts}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  };
  render() {
    const { forum } = this.props;
    return (
      <BaseLayout
        title={I18n.t('forum')}
        statusBarColor="#1565c0"
        toolbarBackgroundColor="#1e88e5"
        leftIcon="close"
        onIconClicked={Actions.pop}
      >
        <Padding backgroundColor="#1e88e5" />
        <View style={styles.list}>
          <Title title={forum.title} subtitle={forum.subtitle} />
          {this.renderList()}
        </View>
        <ActionButton
          buttonColor="#f44336"
          icon={<Icon name="edit" size={24} color="#fff" />}
          onPress={this.handleFabPress}
        />
      </BaseLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const forum = state.course.itemsById.forum[id] || {};
  return {
    forum,
    loading: state.forum.loading,
    refreshing: state.forum.refreshing,
  };
};

export default connect(mapStateToProps)(Forum);

