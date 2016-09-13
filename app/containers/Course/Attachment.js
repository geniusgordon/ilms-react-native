import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RippleView from '../../components/RippleView';
import { downloadAttachment } from './actions/itemDetail';
import { route } from '../App/actions';
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
  handleLink = () => {
    const { attachment, dispatch } = this.props;
    const BASE_URL = 'http://lms.nthu.edu.tw';
    const PATH = `/sys/read_attach.php?id=${attachment.id}`;
    dispatch(route('web', {
      title: attachment.name,
      uri: BASE_URL + PATH,
    }));
  };
  handlePress = () => {
    if (Platform.OS === 'ios') {
      this.handleLink();
    } else {
      this.handleDownload();
    }
  };
  render() {
    const { attachment } = this.props;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.attachment}>
          <Icon name="attachment" size={16} color="#000" />
          <Text style={styles.attachmentName}>{attachment.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default connect()(Attachment);

