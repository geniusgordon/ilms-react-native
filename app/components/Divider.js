import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dividerContainer: {
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

const Divider = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.divider} />
  </View>
);

export default Divider;

