import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import BaseLayout from '../App/BaseLayout';
import { sendPost } from './actions';
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
    iconName: 'send',
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
        placeholder={I18n.t('title')}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        onChangeText={this.handleTitleChange}
      />
    );
  };
  render() {
    const { action } = this.props;
    const { name } = this.state;
    const title = action === 'reply' ? I18n.t('reply') : I18n.t('compose');
    return (
      <BaseLayout
        title={title}
        leftIcon="close"
        statusBarColor="#9e9e9e"
        toolbarBackgroundColor="white"
        toolbarElevation={5}
        toolbarActions={this.actions}
        onIconClicked={this.handleClose}
        onActionSelected={this.handleSubmit}
      >
        <View style={styles.inputContainer}>
          {this.renderTitle()}
          <TextInput
            style={styles.nameInput}
            placeholder={I18n.t('nickname')}
            defaultValue={name}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            onChangeText={this.handleNameChange}
          />
        </View>
        <View style={[styles.inputContainer, styles.contentInputContainer]}>
          <TextInput
            style={styles.contentInput}
            placeholder={I18n.t('content')}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            onChangeText={this.handleContentChange}
            multiline
          />
        </View>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.name,
});

export default connect(mapStateToProps)(Compose);

