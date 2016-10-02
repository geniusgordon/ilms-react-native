import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  timetable: {
    flex: 1,
    position: 'relative',
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#01579b',
    paddingLeft: 24,
  },
  header: {
    width: 112,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  classNumberColumn: {
    width: 24,
    backgroundColor: '#0288d1',
  },
  classNumber: {
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classNumberText: {
    color: 'white',
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
  courseName: {
    color: 'rgba(0, 0, 0, 0.8)',
  },
  courseRoom: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  currentClass: {
    borderWidth: 2,
    borderColor: '#b71c1c',
  },
});

export default styles;

