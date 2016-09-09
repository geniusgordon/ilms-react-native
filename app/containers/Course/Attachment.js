import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Attachment = ({ attachment }) => (
  <View style={styles.attachment}>
    <Text>{attachment.name}</Text>
  </View>
);

Attachment.propTypes = {
  attachment: PropTypes.object,
};

export default Attachment;

