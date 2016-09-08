import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import Attachment from './Attachment';
import Divider from '../../components/Divider';
import { fetchItemDetail } from './actions/itemDetail';
import styles from './styles';

class Detail extends Component {
  static propTypes = {
    id: PropTypes.string,
    itemType: PropTypes.string,
    itemsById: PropTypes.object,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    const { id, itemType, dispatch } = this.props;
    dispatch(fetchItemDetail(itemType, id));
  }
  itemTitles = {
    announcement: '公告',
  };
  renderAttachments = () => {
    const { id, itemType, itemsById } = this.props;
    const item = itemsById[itemType][id] || {};
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
    const { id, itemType, itemsById } = this.props;
    const item = itemsById[itemType][id] || {};
    return (
      <View style={styles.base}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.itemTitles[itemType]}</Text>
        </View>
        <ScrollView>
          <View style={styles.padding} />
          <View style={styles.detailContainer}>
            <View style={styles.detailInfo}>
              <Text style={styles.detailTitle}>{item.title}</Text>
              <Divider />
              <Text style={styles.detailDate}>{item.dateStr}</Text>
            </View>
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

