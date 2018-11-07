import React, { Component } from "react";
//import "./navBarStyle.css";

import { Button, Navbar, FormGroup, FormControl } from "react-bootstrap";
import SearchBar from "./searchBar.jsx";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-dark bg-dark" style={styles.containerNav}>
          <a class="navbar-brand" href="#">
            <h1 style={styles.headStyle}>JBox</h1>
          </a>
          <SearchBar />
        </nav>
      </div>
    );
  }
}

const styles = {
  containerNav: {
    padding: "8px",
    margin: "-15px"
  },
  headStyle: {
    color: "azure"
  }
};

export default NavBar;
