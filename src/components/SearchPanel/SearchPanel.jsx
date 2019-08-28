import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
  return (
    <div className='row mb-3'>
      <div className="input-group col-8">
        <input type="text" className="form-control" placeholder="type to search" aria-label="Search" aria-describedby="basic-addon1"></input>
      </div>
      <div class="btn-group col-4" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info">All</button>
        <button type="button" class="btn btn-outline-secondary">Active</button>
        <button type="button" class="btn btn-outline-secondary">Done</button>
      </div>
    </div>
  );
};

export default SearchPanel;