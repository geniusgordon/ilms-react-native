import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
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
          <Text>{attachment.name}</Text>
        </View>
      </RippleView>
    );
  }
}

export default connect()(Attachment);

