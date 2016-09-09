import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  titleContainer: {
    height: 56,
    backgroundColor: '#ffc107',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  padding: {
    height: 56,
    backgroundColor: '#ffc107',
  },
  list: {
    transform: [{
      translateY: -50,
    }],
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 1,
  },
  listItemDate: {
    width: 96,
    padding: 16,
    alignItems: 'center',
  },
  listItemYear: {
    fontSize: 12,
    fontWeight: '100',
  },
  listItemDay: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItemTitle: {
    flex: 1,
    padding: 16,
  },
  detailContainer: {
    transform: [{
      translateY: -50,
    }],
  },
  detailInfo: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailDate: {
    fontWeight: '100',
    textAlign: 'center',
  },
  detailContent: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  attachmentHeader: {
    paddingLeft: 16,
    margin: 8,
    marginTop: 24,
    fontWeight: 'bold',
  },
  attachmentList: {
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
  },
  attachment: {
    padding: 16,
  },
});

export default styles;

