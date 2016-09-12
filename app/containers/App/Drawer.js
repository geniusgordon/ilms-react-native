import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CourseList from './CourseList';
import RippleView from '../../components/RippleView';
import { route } from './actions';
import { logout } from '../Auth/actions';
import logo from '../../assets/iLms.png';
import styles from './styles';

class Drawer extends Component {
  static propTypes = {
    courseList: PropTypes.array,
    onItemClick: PropTypes.func,
    dispatch: PropTypes.func,
  };
  handleCoursePress = (id) => {
    this.props.dispatch(route('course', { id }));
    this.props.onItemClick();
  };
  handleAboutPress = () => {
    this.props.dispatch(route('about'));
    this.props.onItemClick();
  };
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
          <CourseList
            courseList={courseList}
            onCoursePress={this.handleCoursePress}
          />
          <RippleView onPress={this.handleAboutPress} darkRipple>
            <View style={styles.drawerItem}>
              <Icon name="info-outline" size={24} color="#000" />
              <Text
                style={styles.drawerItemName}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                About
              </Text>
            </View>
          </RippleView>
        </ScrollView>
        <RippleView onPress={this.handleLogout}>
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

