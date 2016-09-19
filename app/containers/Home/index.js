import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import Base from '../App/Base';
import List from '../Course/List';
import { fetchLatestNews } from './actions';
import { route } from '../App/actions';

class Home extends Component {
  static propTypes = {
    latestNews: List.propTypes.items,
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(fetchLatestNews());
  }
  handleItemPress = (itemType, i) => {
    const { latestNews, dispatch } = this.props;
    const { courseId, itemId } = latestNews[i];
    dispatch(route('detail', {
      itemType: 'announcement',
      courseId,
      itemId,
    }));
  };
  handleRefresh = () => {
    this.props.dispatch(fetchLatestNews({ refresh: true }));
  };
  render() {
    const { latestNews, loading, refreshing } = this.props;
    return (
      <Base
        title={I18n.t('latestNews')}
        statusBarBackgroundColor="#d32f2f"
        toolbarBackgroundColor="#f44336"
      >
        <List
          itemType="latestNews"
          paddingColor="#f44336"
          items={latestNews}
          loading={loading}
          refreshing={refreshing}
          onItemPress={this.handleItemPress}
          onRefresh={this.handleRefresh}
        />
      </Base>
    );
  }
}

const mapStateToProps = state => ({
  latestNews: state.home.latestNews,
  loading: state.home.loading,
  refreshing: state.home.refreshing,
});

export default connect(mapStateToProps)(Home);

