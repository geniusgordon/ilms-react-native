import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Base from '../App/Base';
import List from './List';
import TabView from '../../components/TabView';
import FixedActionButton from '../../components/FixedActionButton';
import { fetchItemList } from './actions/itemList';
import { fetchEmailList } from './actions/emailList';
import { route } from '../App/actions';

class Course extends Component {
  static propTypes = {
    id: PropTypes.string,
    courseCollection: PropTypes.object,
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
  handleFabPress = () => {
    const { id, dispatch } = this.props;
    dispatch(route('compose', {
      action: 'post',
      courseId: id,
      postId: 0,
    }));
  };
  itemTypes = ['announcement', 'material', 'assignment', 'forum'];
  renderFixedActionButton = () => {
    if (this.state.fabScale === 0) {
      return null;
    }
    return (
      <FixedActionButton
        style={{ backgroundColor: '#f44336' }}
        onPress={this.handleFabPress}
      >
        <Icon name="edit" size={24} color="#fff" />
      </FixedActionButton>
    );
  };
  render() {
    const { id, courseCollection } = this.props;
    const course = courseCollection.courseById[id] || {};
    const name = course.name;
    return (
      <Base
        title={name}
        statusBarBackgroundColor="#ffa000"
        toolbarBackgroundColor="#ffc107"
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
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="教材"
            paddingColor="#ffc107"
            itemType="material"
            items={this.getItems('material')}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="作業"
            paddingColor="#ffc107"
            itemType="assignment"
            items={this.getItems('assignment')}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="討論區"
            paddingColor="#ffc107"
            itemType="forum"
            items={this.getItems('forum')}
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
});

export default connect(mapStateToProps)(Course);

