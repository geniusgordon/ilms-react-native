import React, { Component, PropTypes } from 'react';
import { Linking, WebView } from 'react-native';

const injectScript = `
  function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i], i);
    }
  }
  var elements = document.getElementsByTagName("a"); 
  forEach(elements, function (element) {
    element.onclick = function (e) {
      e.preventDefault();
      document.title = element.attributes.href.value;
      window.location.hash = 'link';
    };
  });
  document.title = document.body.offsetHeight;
  window.location.hash = 'height';
`;

function getUrlHash(url) {
  const parts = url.split('#');
  if (parts.length === 1) return '';
  return parts[parts.length - 1];
}

class HTMLView extends Component {
  static propTypes = {
    html: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }
  handleNavigationStateChange = (navState) => {
    const hash = getUrlHash(navState.url);
    if (hash === 'height') {
      const height = parseInt(navState.title, 10) + 16;
      this.setState({ height });
    } else if (hash === 'link') {
      const url = navState.title;
      Linking.openURL(url);
    }
  };
  handleError = (error) => {
    console.log(error);
  };
  render() {
    const { html } = this.props;
    const { height } = this.state;
    const style = [];
    if (height > 0) {
      style.push({ height });
    }
    return (
      <WebView
        source={{ html }}
        style={style}
        injectedJavaScript={injectScript}
        onNavigationStateChange={this.handleNavigationStateChange}
        onError={this.handleError}
      />
    );
  }
}

export default HTMLView;

