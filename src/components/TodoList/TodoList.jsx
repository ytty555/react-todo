import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({
  todoData,
  onDelete,
  onToggleItemDone,
  onToggleItemImportant
}) => {
  const elements = todoData.map(el => {
    if (el.visible) {
      return (
        <div className="row" key={el.id}>
          <div className="col-12">
            <li className="list-group-item">
              <TodoListItem
                {...el}
                onDelete={() => onDelete(el.id)}
                onToggleItemDone={() => onToggleItemDone(el.id)}
                onToggleItemImportant={() => onToggleItemImportant(el.id)}
              />
            </li>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
