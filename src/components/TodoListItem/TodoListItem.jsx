import React from 'react';

import './todoListItem.css';

const TodoListItem = ({lable, important}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <div className='row align-items-center todo-list-item'>
      <span className='col-9' style={style}>{ lable }</span>
      <button type="button" class="btn btn-light col-1 btn-my mr-1"><i class="fa fa-trash-o"></i></button>
      <button type="button" class="btn btn-light col-1 btn-my"><i class="fa fa-star-o"></i></button>
    </div>
  );
};

export default TodoListItem;