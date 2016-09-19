import React, { PropTypes } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import I18n from 'react-native-i18n';
import styles from './styles';

const NoData = ({ loading }) => (
  <View key={0} style={styles.listItem}>
    {loading ?
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#388e3c" size="large" />
      </View> :
      <View style={styles.listItemContent}>
        <Text style={styles.listItemTitle}>{I18n.t('noData')}</Text>
      </View>}
  </View>
);

NoData.propTypes = {
  loading: PropTypes.bool,
};

export default NoData;

