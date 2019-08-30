import React, {Component} from 'react';

import StateFilter from '../StateFilter/StateFilter';
import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    lable: ''
  };

  handleOnChange = e => {
    this.setState({lable: e.target.value});
  };

  handleOnSubmint = e => {
    const {onSearchString} = this.props;
    e.preventDefault();
    onSearchString(this.state.lable);
  };

  render() {
    const {onFilter} = this.props;
    return (
      <form className="row mb-3" onSubmit={this.handleOnSubmint}>
        <div className="input-group col-8">
          <input
            type="text"
            className="form-control"
            placeholder="type to search"
            value={this.state.lable}
            onChange={this.handleOnChange}
          ></input>
        </div>
        <StateFilter onFilter={onFilter} />
      </form>
    );
  }
}

export default SearchPanel;
