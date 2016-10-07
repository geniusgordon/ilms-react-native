import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
} from 'react-native';
import HTMLView from '../../components/HTMLView';
import BaseLayout from '../App/BaseLayout';
import Attachment from './Attachment';
import Title from '../../components/Title';
import Padding from '../../components/Padding';
import { fetchItemDetail } from './actions/itemDetail';
import styles from './styles';


class Detail extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    itemId: PropTypes.string,
    itemType: PropTypes.string,
    item: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      courseId: PropTypes.string,
      itemId: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      count: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      dateStr: PropTypes.string,
      date: PropTypes.shape({
        year: PropTypes.string,
        month: PropTypes.string,
        day: PropTypes.string,
        hour: PropTypes.string,
        minute: PropTypes.string,
        second: PropTypes.string,
      }),
    }),
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { courseId, itemId, itemType, dispatch } = this.props;
    dispatch(fetchItemDetail(courseId, itemType, itemId));
  }
  itemTitles = {
    announcement: I18n.t('announcement'),
    material: I18n.t('material'),
    assignment: I18n.t('assignment'),
  };
  handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  renderAttachments = () => {
    const { item, loading } = this.props;
    const attachments = item.attachments || [];
    if (attachments.length === 0) {
      return null;
    }
    if (loading) {
      return null;
    }
    const attachmentList = attachments.map((attachment, i) => (
      <Attachment key={i} attachment={attachment} />
    ));
    return (
      <View>
        <Text style={styles.attachmentHeader}>{I18n.t('attachment')}</Text>
        <View style={styles.attachmentList}>
          {attachmentList}
        </View>
      </View>
    );
  };
  renderInfo = () => {
    const { item, loading } = this.props;
    if (loading) {
      return (
        <View style={styles.detailLoading}>
          <ActivityIndicator color="#388e3c" size="large" />
        </View>
      );
    }
    return <Title title={item.title} subtitle={item.dateStr} />;
  };
  renderDetail = () => {
    const { item, loading } = this.props;
    if (loading) {
      return null;
    }
    if (!item.content || item.content.trim() === '') {
      return null;
    }
    return (
      <View style={styles.detailContent}>
        <HTMLView
          html={item.content}
          onLinkPress={this.handleLinkPress}
        />
      </View>
    );
  };
  render() {
    const { itemType } = this.props;
    return (
      <BaseLayout
        title={this.itemTitles[itemType]}
        leftIcon="close"
        statusBarColor="#388e3c"
        toolbarBackgroundColor="#4caf50"
        onIconClicked={Actions.pop}
      >
        <Padding backgroundColor="#4caf50" />
        {this.renderInfo()}
        <ScrollView>
          <View style={styles.detailContainer}>
            {this.renderDetail()}
            {this.renderAttachments()}
          </View>
        </ScrollView>
      </BaseLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { itemId, itemType } = ownProps;
  const item = state.course.itemsById[itemType][itemId] || {};
  return {
    item,
    loading: state.course.loading.detail,
  };
};

export default connect(mapStateToProps)(Detail);

