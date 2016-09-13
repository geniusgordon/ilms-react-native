import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Base from '../App/Base';
import List from '../Course/List';
import { fetchLatestNews } from './actions';
import { route } from '../App/actions';

class Home extends Component {
  static propTypes = {
    latestNews: PropTypes.array,
    loading: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(fetchLatestNews());
  }
  handleItemPress = (itemType, itemId) => {
    const { latestNews, dispatch } = this.props;
    const { courseId } = latestNews[itemId];
    dispatch(route('course', { id: courseId }));
  };
  render() {
    const { latestNews, loading } = this.props;
    return (
      <Base
        title="最新公吉"
        statusBarBackgroundColor="#d32f2f"
        toolbarBackgroundColor="#f44336"
      >
        <List
          itemType="latestNews"
          paddingColor="#f44336"
          items={latestNews}
          loading={loading}
          onItemPress={this.handleItemPress}
        />
      </Base>
    );
  }
}

const mapStateToProps = (state) => ({
  latestNews: state.home.latestNews,
  loading: state.home.loading,
});

export default connect(mapStateToProps)(Home);

