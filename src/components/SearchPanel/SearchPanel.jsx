import React, {Component} from 'react';

import StateFilter from '../StateFilter/StateFilter';
import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    lable: 'l'
  };


  // TODO
  handleOnChange = e => {
    const {onSearchString} = this.props;

    this.setState({lable: e.target.value});
    onSearchString(this.state.lable);

  };

  render() {
    const {onFilter} = this.props;
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
        <StateFilter onFilter={onFilter} />
      </div>
    );
  }
}

export default SearchPanel;
