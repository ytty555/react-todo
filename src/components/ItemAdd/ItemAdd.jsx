import React, {Component} from 'react';

import './ItemAdd.css'

class ItemAdd extends Component {
  state = {
    lable: ''
  }

  handleOnChange = (e) => {
    this.setState({
      lable: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.lable);
    this.setState({lable: ''});
  }

  render() {
    return (
      <form 
        className='row d-flex'
        onSubmit = {this.handleSubmit}
      >
        <input 
          type='text' 
          className='form-control col-10'
          placeholder='Input new todo item'
          onChange={this.handleOnChange}
          value={this.state.lable}
          ></input>
        <button 
          type="submit" 
          className="btn btn-info col"
          >
          Add
          </button>
      </form>
    );
  }
}

export default ItemAdd;