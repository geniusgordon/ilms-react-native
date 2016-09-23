import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import {
  ActivityIndicator,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BaseLayout from '../App/BaseLayout';
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
          <Text>{I18n.t('noGrading')}</Text>
        </View>
      );
    }
    return (
      <View style={styles.scoreList}>
        <View style={styles.scoreListHeader}>
          <Text style={styles.scoreName}>{I18n.t('scoreItem')}</Text>
          <Text style={styles.scorePercent}>{I18n.t('scorePercentage')}</Text>
          <Text style={styles.score}>{I18n.t('score')}</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  };
  render() {
    return (
      <BaseLayout
        title={I18n.t('grading')}
        leftIcon="close"
        statusBarColor="#9e9e9e"
        toolbarBackgroundColor="white"
        toolbarElevation={5}
        onIconClicked={this.handleClose}
      >
        {this.renderScore()}
      </BaseLayout>
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

