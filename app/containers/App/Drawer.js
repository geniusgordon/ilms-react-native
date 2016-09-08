import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import CourseList from './CourseList';
import RippleView from '../../components/RippleView';
import { route } from './actions';
import styles from './styles';

class Drawer extends Component {
  static propTypes = {
    courseList: PropTypes.array,
    dispatch: PropTypes.func,
  };
  handleCoursePress = (id) => {
    this.props.dispatch(route('course', { id }));
  };
  render() {
    const { courseList } = this.props;
    return (
      <View style={styles.drawer}>
        <RippleView>
          <View style={styles.drawerHeader} />
        </RippleView>
        <CourseList
          courseList={courseList}
          onCoursePress={this.handleCoursePress}
        />
        <RippleView>
          <View style={styles.logout}>
            <Text>登出</Text>
          </View>
        </RippleView>
      </View>
    );
  }
}

const getCourseList = ({ courseById, courseList }) => (
  courseList.current.map((id) => courseById[id])
);

const mapStateToProps = (state) => ({
  courseList: getCourseList(state.course),
});

export default connect(mapStateToProps)(Drawer);
