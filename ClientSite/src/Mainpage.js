import React, { Component } from 'react';
import logo from './j-box-fixed.png';
import './Mainpage.css';
import Form from './form.js';
import Button from 'react-bootstrap/lib/Button';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Mainpage extends Component {

  toggleField() {
    var x = document.getElementById("joinfield");
    if (x.style.display === 'none'){
      x.style.display = 'block';
    }
    else {
      x.style.display = 'none';
    }
  }

  onSubmit = fields => {
    alert('Code Entered: ' + fields);
  }

  render() {
    return (
      <div className="Mainpage">
        <header className="Mainpage-header">
          <img src={logo} className="Mainpage-logo" alt="logo" />
          <p>
            Your Online Jukebox
          </p>
          <div>
            <button className="Mainpage-button" onClick={() => alert('Host Room')}>
              Host Room
            </button>
            <button className="Mainpage-button" 
              onClick={() => this.toggleField()}>
              Join Room
            </button>
            <div id="joinfield" style={{display: 'none'}}>
              <Form onSubmit={fields => this.onSubmit(fields)}/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Mainpage;
