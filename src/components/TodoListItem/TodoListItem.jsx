import React, {Component} from 'react';

import './todoListItem.css';

class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  handleDone = () => {
    this.setState(({done}) => {
      return {done: !done};
    });
  };

  handleImportant = () => {
    this.setState(({important}) => {
      return {important: !important};
    });
  };

  render() {
    const {done, important} = this.state;
    const {lable} = this.props;
    const importantClassName = important ? 'fa fa-star' : 'fa fa-star-o';
    let itemClassNames = 'row align-items-center todo-list-item';

    itemClassNames = done ? itemClassNames + ' done' : itemClassNames;
    itemClassNames = important ? itemClassNames + ' important' : itemClassNames;

    return (
      <div className={itemClassNames}>
        <span className="col-9" onClick={this.handleDone}>
          {lable}
        </span>
        <button type="button" className="btn btn-light col-1 btn-my mr-1">
          <i className="fa fa-trash-o"></i>
        </button>
        <button
          type="button"
          className="btn btn-light col-1 btn-my"
          onClick={this.handleImportant}
        >
          <i className={importantClassName}></i>
        </button>
      </div>
    );
  }
}

export default TodoListItem;
