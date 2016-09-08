import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import TabView from '../../components/TabView';
import Announcement from './Announcement';
import Material from './Material';
import Assignment from './Assignment';
import styles from './styles';

class Course extends Component {
  getAnnoucements = () => {
    const { id, courseCollection } = this.props;
    const announcements = courseCollection.courseById[id].announcements || [];
    return announcements.map((id) => courseCollection.itemsById.announcement[id]);
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

Course.propTypes = {
  id: PropTypes.string,
  courseCollection: PropTypes.object,
};

const mapStateToProps = (state) => ({
  courseCollection: state.course,
});

export default connect(mapStateToProps)(Course);

