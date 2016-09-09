import React from 'react';
import FixedActionButton from '../../components/FixedActionButton';
import Base from '../App/Base';

const Home = () => (
  <Base
    title="iLms"
    statusBarBackgroundColor="#ffa000"
    toolbarBackgroundColor="#ffc107"
  >
    <FixedActionButton style={{ backgroundColor: 'steelblue' }} />
  </Base>
);

export default Home;

