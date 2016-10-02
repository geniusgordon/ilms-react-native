import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import{ ScrollView, View, Text } from 'react-native';
import BaseLayout from '../App/BaseLayout';
import Header from './Header';
import ClassNumber from './ClassNumber';
import Row from './Row';
import { fetchTimetable } from './actions';
import styles from './styles';

class Timetable extends Component {
  static propTypes = {
  };
  componentDidMount() {
    this.props.dispatch(fetchTimetable());
  }
  headerRef = (ref) => {
    if (ref) this.headerScrollTo = ref.scrollTo;
  };
  classNumberRef = (ref) => {
    if (ref) this.classNumberScrollTo = ref.scrollTo;
  };
  handleHorizontalScroll = (event) => {
    this.headerScrollTo({
      x: event.nativeEvent.contentOffset.x,
      animated: false,
    });
  };
  handleVerticalScroll = (event) => {
    this.classNumberScrollTo({
      y: event.nativeEvent.contentOffset.y,
      animated: false,
    });
  };
  renderRows = () => {
    const { timetable } = this.props;
    return timetable.map((row, i) => <Row key={i} />);
  };
  render() {
    return (
      <BaseLayout
        title={I18n.t('timetable')}
        leftIcon="close"
        statusBarColor="#9e9e9e"
        toolbarBackgroundColor="white"
        toolbarElevation={5}
        onIconClicked={Actions.pop}
      >
        <Header ref={this.headerRef} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ClassNumber ref={this.classNumberRef} />
          <ScrollView style={{ flex: 1 }} horizontal onScroll={this.handleHorizontalScroll}>
            <ScrollView style={{ flex: 1}} onScroll={this.handleVerticalScroll}>
              {this.renderRows()}
            </ScrollView>
          </ScrollView>
        </View>
      </BaseLayout>
    );
  }
}

const weekday = ['M', 'T', 'W', 'R', 'F', 'S'];

const getCourseList = ({ courseById, courseList }) => (
  courseList.current.map(id => courseById[id])
);

const getTimetable = (courseList) => {
  const timetable = [];
  for (let i = 0; i < 11; i++) {
    timetable.push([]);
    for (let j = 0; j < 6; j++) {
      timetable[i].push(null);
    }
  }
  courseList.forEach(course => {
    if (course.time) {
      course.time.match(/\w\d/g).forEach(time => {
        const day = weekday.indexOf(time.charAt(0));
        const number = parseInt(time.charAt(1), 10) - 1;
        timetable[number][day] = course;
      });
    }
  });
  return timetable;
};

const mapStateToProps = state => {
  const courseList = getCourseList(state.course);
  return {
    timetable: getTimetable(courseList),
    timetable: getTimetable([]),
    loading: state.timetable.loading,
  }
};

export default connect(mapStateToProps)(Timetable);

