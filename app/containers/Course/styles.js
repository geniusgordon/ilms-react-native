import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
  listItemInfo: {
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
  listItemContent: {
    flex: 1,
    padding: 16,
  },
  listItemTitle: {
    fontWeight: 'bold',
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

