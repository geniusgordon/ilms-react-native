import React, { PropTypes } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';

const NoData = ({ loading }) => (
  <View key={0} style={styles.listItem}>
    {loading ?
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#388e3c" size="large" />
      </View> :
      <View style={styles.listItemContent}>
        <Text style={styles.listItemTitle}>目前尚無資料</Text>
      </View>}
  </View>
);

NoData.propTypes = {
  loading: PropTypes.bool,
};

export default NoData;

