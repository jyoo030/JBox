import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {roomCode: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({roomCode: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.roomCode);
    this.setState({roomCode: ''})

    event.preventDefault();
  }

  render() {
    return (
      <form
      	onSubmit={this.handleSubmit}>
        <label>
          <input className="form-input"
            placeholder="Room Code"
            type="text" 
            value={this.state.roomCode} 
            onChange={this.handleChange} />
        </label>
        <input type="submit" style={{display: 'none'}}/>
      </form>  
    );
  }
}