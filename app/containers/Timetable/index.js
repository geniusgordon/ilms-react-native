import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ Text } from 'react-native';
import { fetchTimetable } from './actions';

class Timetable extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTimetable());
  }
  render() {
    return <Text>Timetable</Text>;
  }
}

export default connect()(Timetable);

