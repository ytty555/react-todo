import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({todoData, onDelete}) => {
  const elements = todoData.map(el => {
    return (
      <div className="row" key={el.id}>
        <div className="col-12">
          <li className="list-group-item">
            <TodoListItem {...el} onDelete={() => onDelete(el.id)} />
          </li>
        </div>
      </div>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
