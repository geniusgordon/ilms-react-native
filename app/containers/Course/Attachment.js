import React, { Component, PropTypes } from 'react';
import RNFetchBlob from 'react-native-fetch-blob'
import { Text, View } from 'react-native';
import RippleView from '../../components/RippleView';
import styles from './styles';

const URL = 'http://lms.nthu.edu.tw/sys/read_attach.php';

class Attachment extends Component {
  static propTypes = {
    attachment: PropTypes.object,
  };
  handleDownload = () => {
  };
  render() {
    const { attachment } = this.props;
    return (
      <RippleView onPress={this.handleDownload} darkRipple>
        <View style={styles.attachment}>
          <Text>{attachment.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default Attachment;

