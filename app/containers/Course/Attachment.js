import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RippleView from '../../components/RippleView';
import { downloadAttachment } from './actions/itemDetail';
import styles from './styles';

class Attachment extends Component {
  static propTypes = {
    attachment: PropTypes.object,
    dispatch: PropTypes.func,
  };
  handleDownload = () => {
    const { attachment, dispatch } = this.props;
    dispatch(downloadAttachment(attachment));
  };
  render() {
    const { attachment } = this.props;
    return (
      <RippleView onPress={this.handleDownload} darkRipple>
        <View style={styles.attachment}>
          <Icon name="attachment" size={16} color="#000" />
          <Text style={styles.attachmentName}>{attachment.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default connect()(Attachment);

