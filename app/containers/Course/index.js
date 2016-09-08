import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import TabView from '../../components/TabView';
import List from './List';
import { fetchItemList } from './actions/itemList';
import styles from './styles';

class Course extends Component {
  static propTypes = {
    id: PropTypes.string,
    courseCollection: PropTypes.object,
    dispatch: PropTypes.func,
  };
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
  itemTypes = ['announcement', 'material', 'assignment'];
  render() {
    const { id, courseCollection } = this.props;
    const course = courseCollection.courseById[id] || {};
    const name = course.name;
    return (
      <View style={styles.base}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.title}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>
        <TabView backgroundColor="#ffc107">
          <List tabLabel="公告" items={this.getItems('announcement')} />
          <List tabLabel="教材" items={this.getItems('material')} />
          <List tabLabel="作業" items={this.getItems('assignment')} />
        </TabView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCollection: state.course,
});

export default connect(mapStateToProps)(Course);
