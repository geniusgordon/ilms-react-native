import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  timetable: {
    flex: 1,
    position: 'relative',
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    paddingLeft: 24,
  },
  header: {
    width: 112,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classNumberColumn: {
    width: 24,
    backgroundColor: 'skyblue',
  },
  classNumber: {
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 112,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default styles;

