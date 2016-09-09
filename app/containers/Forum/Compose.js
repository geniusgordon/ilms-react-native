import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  ToolbarAndroid,
  Text,
  TextInput,
  View,
} from 'react-native';
import { sendPost } from './actions';
import closeIcon from '../../assets/ic_close_black.png';
import sendIcon from '../../assets/ic_send_black.png';
import styles from './styles';

class Compose extends Component {
  static propTypes = {
    title: PropTypes.string,
    username: PropTypes.string,
    action: PropTypes.string,
    courseId: PropTypes.string,
    postId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    dispatch: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      name: props.username || '',
      content: '',
    };
  }
  actions = [{
    title: 'send',
    icon: sendIcon,
    show: 'always',
  }];
  handleTitleChange = (title) => {
    this.setState({ title });
  };
  handleNameChange = (name) => {
    this.setState({ name });
  };
  handleContentChange = (content) => {
    this.setState({ content });
  };
  handleSubmit = () => {
    const { action, courseId, postId, dispatch } = this.props;
    const { title, name, content } = this.state;
    if (title.trim() === '' || name.trim() === '' || content.trim() === '') {
      return;
    }
    dispatch(sendPost(action, courseId, postId, this.state));
  };
  handleClose = () => {
    Actions.pop();
  };
  renderTitle = () => {
    const { action, title } = this.props;
    if (action === 'reply') {
      return <Text style={styles.titleInputText}>{title}</Text>;
    }
    return (
      <TextInput
        style={styles.titleInput}
        placeholder="標題"
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        onChangeText={this.handleTitleChange}
      />
    );
  };
  render() {
    const { action } = this.props;
    const { name } = this.state;
    const title = action === 'reply' ? '回覆' : '發表討論';
    return (
      <View style={styles.base}>
        <ToolbarAndroid
          title={title}
          navIcon={closeIcon}
          style={{ height: 56, backgroundColor: 'white' }}
          elevation={5}
          actions={this.actions}
          onIconClicked={this.handleClose}
          onActionSelected={this.handleSubmit}
        />
        <View style={styles.inputContainer}>
          {this.renderTitle()}
          <TextInput
            placeholder="暱稱"
            defaultValue={name}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            onChangeText={this.handleNameChange}
          />
        </View>
        <View style={[styles.inputContainer, styles.contentInputContainer]}>
          <TextInput
            style={styles.contentInput}
            placeholder="內容"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            onChangeText={this.handleContentChange}
            multiline
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.name,
});

export default connect(mapStateToProps)(Compose);

