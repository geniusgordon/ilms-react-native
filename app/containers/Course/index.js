import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Base from '../App/Base';
import List from './List';
import TabView from '../../components/TabView';
import { fetchItemList } from './actions/itemList';
import { fetchEmailList } from './actions/emailList';
import { route } from '../App/actions';

class Course extends Component {
  static propTypes = {
    id: PropTypes.string,
    courseCollection: PropTypes.object,
    loading: PropTypes.bool,
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
    dispatch(fetchEmailList(id));
    this.itemTypes.forEach((itemType) => {
      dispatch(fetchItemList(id, itemType));
    });
  }
  getItems = (itemType) => {
    const { id, courseCollection } = this.props;
    const course = courseCollection.courseById[id] || {};
    const items = course[itemType] || [];
    return items.map((itemId) => courseCollection.itemsById[itemType][itemId]);
  };
  itemTypes = ['announcement', 'material', 'assignment', 'forum'];
  toolbarActions = [{ title: '寄信給老師或助教' }, { title: '成績查詢' }];
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
  handleEmailPress = () => {
    const { id, courseCollection, dispatch } = this.props;
    const course = courseCollection.courseById[id] || {};
    const emailList = course.emailList || [];
    dispatch(route('email', {
      courseId: id,
      emailList,
    }));
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
    if (action === 0) {
      this.handleEmailPress();
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
    const { id, courseCollection, loading } = this.props;
    const course = courseCollection.courseById[id] || {};
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
            items={this.getItems('announcement')}
            loading={loading}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="教材"
            paddingColor="#ffc107"
            itemType="material"
            items={this.getItems('material')}
            loading={loading}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="作業"
            paddingColor="#ffc107"
            itemType="assignment"
            items={this.getItems('assignment')}
            loading={loading}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="討論區"
            paddingColor="#ffc107"
            itemType="forum"
            items={this.getItems('forum')}
            loading={loading}
            onItemPress={this.handleForumPress}
          />
        </TabView>
        {this.renderFixedActionButton()}
      </Base>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCollection: state.course,
  loading: state.course.loading.list,
});

export default connect(mapStateToProps)(Course);

