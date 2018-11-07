import React, { Component } from "react";
//import "./toolBarStyle.css";

class ToolBar extends Component {
  render() {
    return (
      <div class="container-fluid" style={styles.container}>
        <nav class="toolBar navbar navbar-dark bg-dark">
          <div class="btn-group btn-group-lg" style={styles.buttonStyle}>
            <button
              type="button"
              class="play-btn btn btn-success btn-lg"
              //style={styles.buttonStyle}
            >
              Play
            </button>
            <button
              type="button"
              class="pause-btn btn btn-secondary btn-lg"
              //style={styles.buttonStyle}
            >
              Pause
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "0px",
    margin: "-15px"
  },

  buttonStyle: {
    float: "none",
    left: "45%"
  }
};

export default ToolBar;
