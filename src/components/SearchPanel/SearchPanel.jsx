import React from 'react';

import StateFilter from '../StateFilter/StateFilter'
import './SearchPanel.css';

const SearchPanel = () => {
  return (
    <div className='row mb-3'>
      <div className="input-group col-8">
        <input type="text" className="form-control" placeholder="type to search" aria-label="Search" aria-describedby="basic-addon1"></input>
      </div>
      <StateFilter />
    </div>
  );
};

export default SearchPanel;