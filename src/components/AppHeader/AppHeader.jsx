import React from 'react';

import './AppHeader.css'

const AppHeader = () => {
  return (
    <div className='row align-items-end app-header mb-3'>
      <h1 className='col-6 align-self-start'>Todo List</h1>
      <p className='col-6 align-self-end'>1 more to do, 3 done</p>
    </div>
    );
};

export default AppHeader;