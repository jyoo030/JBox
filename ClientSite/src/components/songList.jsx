import React, { Component } from "react";
//import "./songListStyle.css";

class SongList extends Component {
  state = {};
  render() {
    return <div class="col-lg-4 songList" style={styles.container} />;
  }
}

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "rgb(220, 220, 220)",
    height: "600px"
  }
};

export default SongList;
