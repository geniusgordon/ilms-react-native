import React from 'react';
import { Text } from 'react-native';
import TabView from '../../components/TabView';
import Base from '../App/Base';

const Home = () => (
  <Base title="iLms" toolbarBackgroundColor="#888">
    <TabView backgroundColor="#888">
      <Text tabLabel="home">Home</Text>
    </TabView>
  </Base>
);

export default Home;

