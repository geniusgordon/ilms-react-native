import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ToolBar from '../../components/ToolBar';
import EmailItem from './EmailItem';
import { fetchEmailList } from './actions/emailList';
import styles from './styles';

class EmailList extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    courseCollection: PropTypes.object,
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { courseId, dispatch } = this.props;
    dispatch(fetchEmailList(courseId));
  }
  handleClose = () => {
    Actions.pop();
  };
  renderList = () => {
    const { courseId, courseCollection, loading } = this.props;
    const course = courseCollection.courseById[courseId] || {};
    const emailList = course.emailList || [];
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    return emailList.map(({ name, email }) => (
      <EmailItem key={name} name={name} email={email} />
    ));
  };
  render() {
    return (
      <View style={styles.base}>
        <StatusBar barStyle="light-content" backgroundColor="#9e9e9e" />
        <ToolBar
          title="寄信給教授或助教"
          leftIcon="close"
          statusbarColor="#9e9e9e"
          style={styles.toolbar}
          onLeftClicked={this.handleClose}
        />
        <ScrollView>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCollection: state.course,
  loading: state.course.loading.email,
});

export default connect(mapStateToProps)(EmailList);

