import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  forumTitleContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  forumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  post: {
    margin: 8,
    height: 200,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  postBorderTop: {
    height: 16,
    backgroundColor: 'steelblue',
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

