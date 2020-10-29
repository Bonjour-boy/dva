import React from 'react';
import HomePage from './HomePage/HomePage'
import { connect } from 'dva';

// import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div> 
        <HomePage></HomePage>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
