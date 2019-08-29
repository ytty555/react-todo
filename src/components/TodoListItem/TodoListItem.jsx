import React, {Component} from 'react';

import './todoListItem.css';

class TodoListItem extends Component {

  render() {
    const {lable, done, important, onDelete, onToggleItemDone, onToggleItemImportant} = this.props;
    const importantClassName = important ? 'fa fa-star' : 'fa fa-star-o';
    let itemClassNames = 'row justify-content-between todo-list-item';

    itemClassNames = done ? itemClassNames + ' done' : itemClassNames;
    itemClassNames = important ? itemClassNames + ' important' : itemClassNames;


    return (
      <div className={itemClassNames}>
        <span className="col-9" onClick={onToggleItemDone}>
          {lable}
        </span>
        <button
          type="button"
          className="btn btn-light col-1 btn-my mr-1"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <button
          type="button"
          className="btn btn-light col-1 btn-my"
          onClick={onToggleItemImportant}
        >
          <i className={importantClassName}></i>
        </button>
      </div>
    );
  }
}

export default TodoListItem;
