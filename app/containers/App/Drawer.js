import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import CourseList from './CourseList';
import RippleView from '../../components/RippleView';
import styles from './styles';

class Drawer extends Component {
  static propTypes = {
    courseList: PropTypes.array,
  };
  render() {
    const { courseList } = this.props;
    return (
      <View>
        <RippleView>
          <View style={styles.drawerHeader}/>
        </RippleView>
        <CourseList courseList={courseList} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.app.courseList,
});

export default connect(mapStateToProps)(Drawer);

