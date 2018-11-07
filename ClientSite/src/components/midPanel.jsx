import React, { Component } from "react";
import SongList from "./songList.jsx";
import MainWindow from "./mainWin.jsx";

class MidPanel extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row ">
          <SongList />
          <MainWindow />
        </div>
      </div>
    );
  }
}

// const styles = {
//   middleContainer: {
//     padding: "80px",
//     backgroundColor: "rgb(199, 33, 33)"
//   },

//   fluidContainer: {
//     margin: "0px"
//   }
// };

export default MidPanel;
