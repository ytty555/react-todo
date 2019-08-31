import React, {Component} from 'react';

import './StateFilter.css';

class StateFilter extends Component {
  
  render() {
    const buttons = [
      {value: 'all', lable: 'All'},
      {value: 'active', lable: 'Active'},
      {value: 'done', lable: 'Done'},
    ];

    const {activeButton, onFilter} = this.props;

    const btnElements = buttons.map((btn) => {
      const isActive = (activeButton === btn.value);
      const className = isActive ? 'btn btn-info' : 'btn btn-outline-secondary';

      return (
        <button
          key={btn.value}
          type="button"
          className={className}
          onClick={() => onFilter(btn.value)}
        >
        {btn.lable}
        </button>
      );
    })

    return (
      <div className="btn-group col-4" role="group" aria-label="Basic example">
        {btnElements}
      </div>
    );
  }
}

export default StateFilter;
