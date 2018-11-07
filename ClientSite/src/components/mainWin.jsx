import React, { Component } from "react";
//import "./mainWinStyle.css";
import album from "./album.jpg";

class MainWindow extends Component {
  state = {};
  render() {
    return (
      <div class="col-lg-8" style={styles.mainWin}>
        <div style={styles.gallery.hover}>
          <a target="_blank" href="album.jpg">
            <img
              src={album}
              alt="album"
              width="300"
              height="200"
              style={styles.gallery.img}
            />
          </a>
          <div style={styles.desc}>INFO</div>
        </div>
      </div>
    );
  }
}

const styles = {
  mainWin: {
    backgroundColor: "lightgray"
  },

  gallery: {
    margin: "5px",
    border: "1px solid #ccc",
    float: "left",
    width: "180px"
  },

  hover: {
    border: "1px solid #777"
  },

  img: {
    width: "100%",
    height: "auto"
  },

  desc: {
    padding: "15px",
    textAlign: "center"
  }
};

export default MainWindow;
