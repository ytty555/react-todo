import React from 'react';

import TodoListItem from '../TodoListItem'
import '../TodoListItem/todoListItem.css'

const TodoList = ({todoData}) => {
  const generateKey = () => {
    return Math.random()
  }

  const elements = todoData.map((el) => {
    return (
      <li className='list-group-item' key={generateKey()}>
        <TodoListItem {...el} />
      </li>
    );
  })

  return (
    <ul className='list-group todo-item'>
      {elements}
    </ul>
  );
};

export default TodoList;