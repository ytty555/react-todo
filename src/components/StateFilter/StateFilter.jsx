import React from 'react';

import './StateFilter.css';

const StateFilter = () => {
  return (
    <div class="btn-group col-4" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-info">All</button>
      <button type="button" class="btn btn-outline-secondary">Active</button>
      <button type="button" class="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default StateFilter;