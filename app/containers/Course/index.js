import React from 'react';
import { Text } from 'react-native';
import TabView from '../../components/TabView';
import Announcement from './Announcement';
import Material from './Material';
import Assignment from './Assignment';

const Course = () => (
  <TabView backgroundColor="#ffc107">
    <Announcement tabLabel="公告" />
    <Material tabLabel="教材" />
    <Assignment tabLabel="作業" />
  </TabView>
);

export default Course;

