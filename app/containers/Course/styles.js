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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  listItemSubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  detailContent: {
    margin: 8,
    minHeight: 150,
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
    flexDirection: 'row',
  },
  attachmentName: {
    paddingLeft: 16,
  },
});

export default styles;

