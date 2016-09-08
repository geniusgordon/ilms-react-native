import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TabView from '../../components/TabView';
import Announcement from './Announcement';
import Material from './Material';
import Assignment from './Assignment';

const Course = ({ announcements }) => (
  <TabView backgroundColor="#ffc107">
    <Announcement tabLabel="公告" announcements={announcements} />
    <Material tabLabel="教材" />
    <Assignment tabLabel="作業" />
  </TabView>
);

Course.propTypes = {
  announcements: PropTypes.array,
};

const mapStateToProps = (state) => ({
  announcements: state.course.announcements,
});

export default connect(mapStateToProps)(Course);

