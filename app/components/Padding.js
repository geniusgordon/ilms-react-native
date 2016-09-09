import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  padding: {
    height: 56,
    marginBottom: -50,
  },
});

const Padding = ({ backgroundColor }) => (
  <View style={[styles.padding, { backgroundColor }]} />
);

Padding.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Padding;

