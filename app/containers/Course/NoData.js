import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const NoData = () => (
  <View style={styles.listItem}>
    <View style={styles.listItemContent}>
      <Text style={styles.listItemTitle}>目前尚無資料</Text>
    </View>
  </View>
);

export default NoData;

