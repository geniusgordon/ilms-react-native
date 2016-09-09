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
    marginBottom: -50,
  },
  forumTitleContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
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
  postContent: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
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

