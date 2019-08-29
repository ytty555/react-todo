import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({todoData}) => {
  const generateKey = () => {
    return Math.random()
  }

  const elements = todoData.map((el) => {
    return (
      <div className='row'>
        <div className='col-12'>
          <li className='list-group-item' key={generateKey()}>
            <TodoListItem {...el} />
          </li>
        </div>
      </div>
    );
  })

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  );
};

export default TodoList;