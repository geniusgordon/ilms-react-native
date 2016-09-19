import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, ScrollView } from 'react-native';
import I18n from 'react-native-i18n';
import CourseList from './CourseList';
import DrawerItem from './DrawerItem';
import RippleView from '../../components/RippleView';
import { route } from './actions';
import { logout } from '../Auth/actions';
import logo from '../../assets/iLms.png';
import styles from './styles';

class Drawer extends Component {
  static propTypes = {
    courseList: CourseList.propTypes.courseList,
    onItemClick: PropTypes.func,
    dispatch: PropTypes.func,
  };
  handleCoursePress = (id) => {
    this.props.dispatch(route('course', { id }));
    this.props.onItemClick();
  };
  handleHomePress = () => {
    this.props.dispatch(route('home'));
    this.props.onItemClick();
  };
  handleAboutPress = () => {
    this.props.dispatch(route('about'));
    this.props.onItemClick();
  };
  handleLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { courseList } = this.props;
    return (
      <View style={styles.drawer}>
        <RippleView>
          <View style={styles.drawerHeader}>
            <Image source={logo} style={styles.logo} />
          </View>
        </RippleView>
        <ScrollView style={styles.drawerItemList}>
          <DrawerItem
            onPress={this.handleHomePress}
            icon="stars"
            name={I18n.t('latestNews')}
          />
          <CourseList
            courseList={courseList}
            onCoursePress={this.handleCoursePress}
          />
          <DrawerItem
            onPress={this.handleAboutPress}
            icon="info-outline"
            name="About"
          />
        </ScrollView>
        <RippleView onPress={this.handleLogout}>
          <View style={styles.logout}>
            <Text>{I18n.t('logout')}</Text>
          </View>
        </RippleView>
      </View>
    );
  }
}

const getCourseList = ({ courseById, courseList }) => (
  courseList.current.map(id => courseById[id])
);

const mapStateToProps = state => ({
  courseList: getCourseList(state.course),
});

export default connect(mapStateToProps)(Drawer);

