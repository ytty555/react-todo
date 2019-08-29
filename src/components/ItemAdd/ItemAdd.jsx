import React from 'react';

import './ItemAdd.css'

const ItemAdd = ({onAddItem}) => {
  return (
    <div className='row justify-content-end'>
      <div className='col-2'>
      <button 
        type="button" 
        className="btn btn-info"
        onClick={onAddItem}
        >
        Add
        </button>
      </div>
    </div>
  );
}

export default ItemAdd;