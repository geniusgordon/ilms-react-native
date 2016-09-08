import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const Divider = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.divider} />
  </View>
);

export default Divider;

