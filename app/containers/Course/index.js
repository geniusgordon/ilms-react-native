import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import Base from '../App/Base';
import List from './List';
import TabView from '../../components/TabView';
import FixedActionButton from '../../components/FixedActionButton';
import { fetchItemList } from './actions/itemList';
import { route } from '../App/actions';
import editIcon from '../../assets/ic_edit_white.png';

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
    this.props.dispatch(route('forum', { id: itemId }));
  };
  handleTabChange = (tab) => {
    this.setState({ fabScale: tab.i === 3 ? 1 : 0 });
  };
  handleFabPress = () => {
    this.props.dispatch(route('compose'));
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
        <Image source={editIcon} style={{ width: 24, height: 24 }} />
      </FixedActionButton>
    );
  };
  render() {
    const { id, courseCollection } = this.props;
    const course = courseCollection.courseById[id] || {};
    const name = course.name;
    return (
      <Base title={name} toolbarBackgroundColor="#ffc107">
        <TabView
          backgroundColor="#ffc107"
          onChangeTab={this.handleTabChange}
        >
          <List
            tabLabel="公告"
            itemType="announcement"
            items={this.getItems('announcement')}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="教材"
            itemType="material"
            items={this.getItems('material')}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="作業"
            itemType="assignment"
            items={this.getItems('assignment')}
            onItemPress={this.handleItemPress}
          />
          <List
            tabLabel="討論區"
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

