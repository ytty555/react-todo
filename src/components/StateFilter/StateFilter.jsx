import React, {Component} from 'react';

import './StateFilter.css';

class StateFilter extends Component {
  state = {
    btnCheck: {
      all: true,
      active: false,
      done: false
    }
  };

  handleBtnChecked = e => {
    const {onFilter} = this.props;
    // Take button name as string
    const currBtn = e.target.textContent.toLowerCase();
    // Make copy of the state to variable "stateCopy"
    const stateCopy = {...this.state.btnCheck};

    // eslint-disable-next-line
    for (let key in this.state.btnCheck) {
      stateCopy[key] = key === currBtn ? true : false;
    }

    this.setState(({btnCheck}) => {
      return {
        btnCheck: stateCopy
      };
    });

    onFilter(currBtn);
  };

  render() {
    const {btnCheck} = this.state;

    const allClassName = btnCheck.all
      ? 'btn btn-info'
      : 'btn btn-outline-secondary';
    const activeClassName = btnCheck.active
      ? 'btn btn-info'
      : 'btn btn-outline-secondary';
    const doneClassName = btnCheck.done
      ? 'btn btn-info'
      : 'btn btn-outline-secondary';

    return (
      <div className="btn-group col-4" role="group" aria-label="Basic example">
        <button
          type="button"
          className={allClassName}
          onClick={this.handleBtnChecked}
        >
          All
        </button>
        <button
          type="button"
          className={activeClassName}
          onClick={this.handleBtnChecked}
        >
          Active
        </button>
        <button
          type="button"
          className={doneClassName}
          onClick={this.handleBtnChecked}
        >
          Done
        </button>
      </div>
    );
  }
}

export default StateFilter;
