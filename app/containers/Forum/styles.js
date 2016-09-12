import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  loadingContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
  },
  list: {
    flex: 1,
  },
  post: {
    margin: 8,
    height: 200,
    backgroundColor: 'white',
    elevation: 2,
    position: 'relative',
  },
  postBorderTop: {
    height: 16,
    backgroundColor: 'steelblue',
  },
  floor: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  postInfo: {
    padding: 16,
    flexDirection: 'row',
  },
  postIconContainer: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postInfoContent: {
    flex: 1,
    height: 64,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  postInfoFirstLine: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  postInfoName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 8,
  },
  postContentContainer: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
  },
  titleInputText: {
    fontSize: 20,
    color: 'black',
    paddingTop: 16,
    paddingBottom: 16,
  },
  inputContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentInputContainer: {
    flex: 1,
  },
  contentInput: {
    flex: 1,
    textAlignVertical: 'top',
  },
});

export default styles;

