import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RippleView from '../../components/RippleView';

const styles = StyleSheet.create({
  container: {
    height: 48,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    flex: 1,
  },
  percent: {
    width: 48,
    textAlign: 'right',
  },
  score: {
    width: 48,
    textAlign: 'right',
  },
});

const ScoreItem = ({ name, percent, score }) => (
  <RippleView darkRipple>
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.percent}>{percent}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  </RippleView>
);

ScoreItem.propTypes = {
  name: PropTypes.string,
  percent: PropTypes.string,
  score: PropTypes.string,
};

export default ScoreItem;

