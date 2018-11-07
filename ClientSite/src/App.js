import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
//import VotingBox from "./components/voteBox";
import Frame from "./components/frame";

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar class="navbar navbar-dark bg-dark fixed-top" />
        <VotingBox class="position-relative" /> */}
        <Frame />
      </div>
    );
  }
}

export default App;
