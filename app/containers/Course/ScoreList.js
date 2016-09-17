import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ToolBar from '../../components/ToolBar';
import ScoreItem from './ScoreItem';
import { fetchScore } from './actions/score';
import styles from './styles';

class ScoreList extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    courseCollection: PropTypes.object,
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { courseId, dispatch } = this.props;
    dispatch(fetchScore(courseId));
  }
  handleClose = () => {
    Actions.pop();
  };
  renderList = () => {
    const { courseId, courseCollection } = this.props;
    const course = courseCollection.courseById[courseId] || {};
    const scoreList = course.scoreList;
    return scoreList.map(({ name, percent, score }) => (
      <ScoreItem
        key={name}
        name={name}
        percent={percent}
        score={score}
      />
    ));
  };
  renderScore = () => {
    const { courseId, courseCollection, loading } = this.props;
    const course = courseCollection.courseById[courseId] || {};
    const scoreList = course.scoreList;

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    if (!scoreList) {
      return (
        <View style={styles.loadingContainer}>
          <Text>尚未開放</Text>
        </View>
      );
    }
    return (
      <View style={styles.scoreList}>
        <View style={styles.scoreListHeader}>
          <Text style={styles.scoreName}>項目</Text>
          <Text style={styles.scorePercent}>比例</Text>
          <Text style={styles.score}>分數</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.base}>
        <StatusBar barStyle="light-content" backgroundColor="#9e9e9e" />
        <ToolBar
          title="成績"
          leftIcon="close"
          statusbarColor="#9e9e9e"
          style={styles.toolbar}
          onLeftClicked={this.handleClose}
        />
        {this.renderScore()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCollection: state.course,
  loading: state.course.loading.score,
});

export default connect(mapStateToProps)(ScoreList);

