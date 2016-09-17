import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  toolbar: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  loadingContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
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
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    marginTop: 8,
  },
  titleInputText: {
    color: 'black',
    marginTop: 5,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 16,
  },
  nameInput: {
    flex: 1,
  },
  inputContainer: {
    height: 100,
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

