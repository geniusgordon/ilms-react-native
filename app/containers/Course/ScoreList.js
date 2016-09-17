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
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScoreItem from './ScoreItem';
import { fetchScore } from './actions/score';
import styles from './styles';

class ScoreList extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    scoreList: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      percent: PropTypes.string,
      score: PropTypes.string,
    })),
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
    const { scoreList } = this.props;
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
    const { scoreList, loading } = this.props;

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
        <Icon.ToolbarAndroid
          title="成績"
          navIconName="close"
          style={{ height: 56, backgroundColor: 'white' }}
          elevation={5}
          onIconClicked={this.handleClose}
        />
        {this.renderScore()}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { courseId } = ownProps;
  const course = state.course.courseById[courseId] || {};
  const scoreList = course.scoreList;
  return {
    scoreList,
    loading: state.course.loading.score,
  };
};

export default connect(mapStateToProps)(ScoreList);

