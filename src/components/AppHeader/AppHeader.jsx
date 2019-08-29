import React from 'react';

import './AppHeader.css';

const AppHeader = ({todo, done}) => {
  const resString = `${todo} more to do, ${done} done`;

  return (
    <div className="row align-items-end app-header mb-3">
      <h1 className="col-6 align-self-start">Todo List</h1>
      <p className="col-6 align-self-end">{resString}</p>
    </div>
  );
};

export default AppHeader;
