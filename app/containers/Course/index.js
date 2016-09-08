import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import TabView from '../../components/TabView';
import Announcement from './Announcement';
import Material from './Material';
import Assignment from './Assignment';
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
    dispatch(fetchItemList(id, 'announcement'));
  }
  getAnnoucements = () => {
    const { id, courseCollection } = this.props;
    const course = courseCollection.courseById[id] || {};
    const announcements = course.announcement || [];
    return announcements.map((aid) => courseCollection.itemsById.announcement[aid]);
  };
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
          <Announcement tabLabel="公告" announcements={this.getAnnoucements()} />
          <Material tabLabel="教材" />
          <Assignment tabLabel="作業" />
        </TabView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCollection: state.course,
});

export default connect(mapStateToProps)(Course);

