import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import Attachment from './Attachment';
import Title from '../../components/Title';
import Padding from '../../components/Padding';
import Divider from '../../components/Divider';
import { fetchItemDetail } from './actions/itemDetail';
import styles from './styles';

class Detail extends Component {
  static propTypes = {
    courseId: PropTypes.string,
    itemId: PropTypes.string,
    itemType: PropTypes.string,
    itemsById: PropTypes.object,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { courseId, itemId, itemType, dispatch } = this.props;
    dispatch(fetchItemDetail(courseId, itemType, itemId));
  }
  itemTitles = {
    announcement: '公告',
    material: '教材',
    assignment: '作業',
  };
  renderAttachments = () => {
    const { itemId, itemType, itemsById } = this.props;
    const item = itemsById[itemType][itemId] || {};
    const attachments = item.attachments || [];
    if (attachments.length === 0) {
      return null;
    }
    const attachmentList = attachments.map((attachment, i) => (
      <Attachment key={i} attachment={attachment} />
    ));
    return (
      <View>
        <Text style={styles.attachmentHeader}>附檔</Text>
        <View style={styles.attachmentList}>
          {attachmentList}
        </View>
      </View>
    );
  };
  render() {
    const { itemId, itemType, itemsById } = this.props;
    const item = itemsById[itemType][itemId] || {};
    return (
      <View style={styles.base}>
        <StatusBar backgroundColor="#388e3c" />
        <Title title={this.itemTitles[itemType]} backgroundColor="#4caf50" />
        <Padding backgroundColor="#4caf50" />
        <View style={styles.detailInfo}>
          <Text style={styles.detailTitle}>{item.title}</Text>
          <Divider />
          <Text style={styles.detailDate}>{item.dateStr}</Text>
        </View>
        <ScrollView>
          <View style={styles.detailContainer}>
            <View style={styles.detailContent}>
              <Text>{item.content}</Text>
            </View>
            {this.renderAttachments()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsById: state.course.itemsById,
});

export default connect(mapStateToProps)(Detail);

