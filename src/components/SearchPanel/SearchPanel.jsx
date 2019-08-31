import React, {Component} from 'react';

import StateFilter from '../StateFilter/StateFilter';
import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    lable: ''
  };


  handleOnChange = e => {
    const {onSearchString} = this.props;
    onSearchString(e.target.value);

    this.setState({lable: e.target.value});

  };

  render() {
    const {onFilter, activeButton} = this.props;
    return (
      <div className="row mb-3">
        <div className="input-group col-8">
          <input
            type="text"
            className="form-control"
            placeholder="type to search"
            value={this.state.lable}
            onChange={this.handleOnChange}
          ></input>
        </div>
        <StateFilter 
          activeButton={activeButton}
          onFilter={onFilter} />
      </div>
    );
  }
}

export default SearchPanel;
