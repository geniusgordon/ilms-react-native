import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import {
  ActivityIndicator,
  ScrollView,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BaseLayout from '../App/BaseLayout';
import EmailItem from './EmailItem';
import { fetchEmailList } from './actions/emailList';
import styles from './styles';

class EmailList extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    emailList: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    })),
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
    const { emailList, loading } = this.props;
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
      <BaseLayout
        title={I18n.t('sendEmail')}
        leftIcon="close"
        statusBarColor="#9e9e9e"
        toolbarBackgroundColor="white"
        toolbarElevation={5}
        onIconClicked={this.handleClose}
      >
        <ScrollView>
          {this.renderList()}
        </ScrollView>
      </BaseLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { courseId } = ownProps;
  const course = state.course.courseById[courseId] || {};
  const emailList = course.emailList || [];
  return {
    emailList,
    loading: state.course.loading.email,
  };
};

export default connect(mapStateToProps)(EmailList);

