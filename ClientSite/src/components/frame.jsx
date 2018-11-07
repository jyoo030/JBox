import React, { Component } from "react";
import NavBar from "./navBar.jsx";
import ToolBar from "./toolBar.jsx";
import MidPanel from "./midPanel.jsx";
import { Button, Navbar, FormGroup, FormControl, Grid } from "react-bootstrap";
import "./frameStyle.css";
import MainPanel from "./midPanel.jsx";

class Frame extends Component {
  state = {};
  render() {
    return (
      <body>
        <NavBar />
        <MidPanel />
        <ToolBar />
      </body>
    );
  }
}

export default Frame;
