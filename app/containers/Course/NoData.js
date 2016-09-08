import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const NoData = () => (
  <View style={styles.listItem}>
    <Text style={styles.listItemTitle}>目前尚無資料</Text>
  </View>
);

export default NoData;

