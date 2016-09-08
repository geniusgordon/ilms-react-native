import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TabView from '../../components/TabView';
import Announcement from './Announcement';
import Material from './Material';
import Assignment from './Assignment';

class Course extends Component {
  getAnnoucements = () => {
  };
  render() {
    return (
      <TabView backgroundColor="#ffc107">
        <Announcement tabLabel="公告" announcements={this.getAnnoucements()} />
        <Material tabLabel="教材" />
        <Assignment tabLabel="作業" />
      </TabView>
    );
  }
}

Course.propTypes = {
  id: PropTypes.string,
  course: PropTypes.object,
};

const mapStateToProps = (state) => ({
  course: state.course,
});

export default connect(mapStateToProps)(Course);

