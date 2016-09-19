import React, { Component, PropTypes } from 'react';
import { ActionSheetIOS } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Base from '../App/Base';
import List from './List';
import TabView from '../../components/TabView';
import { fetchItemList } from './actions/itemList';
import { route } from '../App/actions';

const itemTypes = ['announcement', 'material', 'assignment', 'forum'];
const itemListPropType = PropTypes.shape({
  page: PropTypes.number,
  more: PropTypes.bool,
  data: List.propTypes.items,
});

class Course extends Component {
  static propTypes = {
    id: PropTypes.string,
    course: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    announcement: itemListPropType,
    material: itemListPropType,
    assignment: itemListPropType,
    forum: itemListPropType,
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      fabScale: 0,
    };
  }
  componentDidMount() {
    const { id, dispatch } = this.props;
    itemTypes.forEach((itemType) => {
      dispatch(fetchItemList(id, itemType));
    });
  }
  toolbarActions = [{ title: '寄信給老師或助教' }, { title: '成績查詢' }];
  fetchMoreItems = (itemType, page) => {
    const { id, dispatch } = this.props;
    dispatch(fetchItemList(id, itemType, { page }));
  };
  handleRefresh = (itemType) => {
    const { id, dispatch } = this.props;
    dispatch(fetchItemList(id, itemType, { refresh: true }));
  };
  handleItemPress = (itemType, itemId) => {
    const courseId = this.props.id;
    this.props.dispatch(route('detail', {
      itemType,
      courseId,
      itemId,
    }));
  };
  handleForumPress = (itemType, itemId) => {
    const { id, dispatch } = this.props;
    dispatch(route('forum', {
      id: itemId,
      courseId: id,
    }));
  };
  handleTabChange = (tab) => {
    this.setState({ fabScale: tab.i === 3 ? 1 : 0 });
  };
  handleEditPress = () => {
    const { id, dispatch } = this.props;
    dispatch(route('compose', {
      action: 'post',
      courseId: id,
      postId: 0,
    }));
  };
  handleActionSelect = (action) => {
    const { id, dispatch } = this.props;
    if (action === 0) {
      dispatch(route('email', {
        courseId: id,
      }));
    } else if (action === 1) {
      dispatch(route('score', {
        courseId: id,
      }));
    }
  };
  renderFixedActionButton = () => {
    if (this.state.fabScale === 0) {
      return null;
    }
    return (
      <ActionButton
        buttonColor="#f44336"
        icon={<Icon name="edit" size={24} color="#fff" />}
        onPress={this.handleEditPress}
      />
    );
  };
  render() {
    const {
      course,
      loading,
      refreshing,
      announcement,
      material,
      assignment,
      forum,
    } = this.props;
    return (
      <Base
        title={course.name}
        statusBarBackgroundColor="#ffa000"
        toolbarBackgroundColor="#ffc107"
        toolbarActions={this.toolbarActions}
        onActionSelected={this.handleActionSelect}
      >
        <TabView
          backgroundColor="#ffc107"
          onChangeTab={this.handleTabChange}
        >
          <List
            tabLabel="公告"
            paddingColor="#ffc107"
            itemType="announcement"
            page={announcement.page}
            more={announcement.more}
            items={announcement.data}
            loading={loading}
            refreshing={refreshing}
            onRefresh={this.handleRefresh}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="教材"
            paddingColor="#ffc107"
            itemType="material"
            page={material.page}
            more={material.more}
            items={material.data}
            loading={loading}
            refreshing={refreshing}
            onRefresh={this.handleRefresh}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="作業"
            paddingColor="#ffc107"
            itemType="assignment"
            page={assignment.page}
            more={assignment.more}
            items={assignment.data}
            loading={loading}
            refreshing={refreshing}
            onRefresh={this.handleRefresh}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="討論區"
            paddingColor="#ffc107"
            itemType="forum"
            page={forum.page}
            more={forum.more}
            items={forum.data}
            loading={loading}
            refreshing={refreshing}
            onItemPress={this.handleForumPress}
            onRefresh={this.handleRefresh}
            fetchMoreItems={this.fetchMoreItems}
          />
        </TabView>
        {this.renderFixedActionButton()}
      </Base>
    );
  }
}

const getItems = (items, itemType, itemsById) => {
  if (!items) {
    return {
      page: 1,
      more: false,
      data: [],
    };
  }
  return {
    ...items,
    data: items.data.map(itemId => itemsById[itemType][itemId]),
  };
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const course = state.course.courseById[id] || {};
  const items = {};
  itemTypes.forEach((itemType) => {
    items[itemType] = getItems(course[itemType], itemType, state.course.itemsById);
  });
  return {
    course,
    ...items,
    loading: state.course.loading.list,
    refreshing: state.course.loading.refresh,
  };
};

export default connect(mapStateToProps)(Course);

