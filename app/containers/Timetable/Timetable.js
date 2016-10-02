import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import{ ScrollView, View, Text } from 'react-native';
import BaseLayout from '../App/BaseLayout';
import Header from './Header';
import ClassNumber from './ClassNumber';
import Row from './Row';
import { fetchTimetable } from './actions';
import { route } from '../App/actions';
import styles from './styles';

class Timetable extends Component {
  static propTypes = {
    timetable: PropTypes.arrayOf(Row.propTypes.row),
    currentClass: Row.propTypes.currentClass,
    dispatch: PropTypes.func,
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
  handleClassPress = (id) => {
    this.props.dispatch(route('course', { id }));
  };
  renderRows = () => {
    const { timetable, currentClass } = this.props;
    return timetable.map((row, i) =>
      <Row
        key={i}
        row={row}
        classNumber={i}
        currentClass={currentClass}
        onClassPress={this.handleClassPress}
      />
    );
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

export default Timetable;

