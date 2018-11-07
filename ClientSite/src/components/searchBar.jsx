import React, { Component } from "react";
import { Button, Navbar, FormGroup, FormControl } from "react-bootstrap";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

class SearchBar extends Component {
  constructor() {
    super();
    this.setQuery.bind(this);
    this.setState.bind(this);
    this.runSearch.bind(this);
  }

  componentWillMount() {
    this.setState({ inputValue: "", numOnline: 0 });
  }

  setQuery(e) {
    this.setState({ inputValue: e.target.value });
  }

  runSearch(e) {
    e.preventDefault();
    this.setState({
      inputValue: this.state.inputValue,
      numOnline: this.state.numOnline
    });
  }

  // handleInput = argu => {
  //   this.setState({ inputValue: argu });
  // };

  handleSearch = () => {
    //TO DO
    //this.state.setState({ inputValue: 23231 });
    //document.getElementById("test1");
    //let text = document.getElementById("test1");

    //text.value
    //this.handleInput(text.value);
    //text.value = "123123";
    //this.state.setState(inputValue : )
    alert(this.state.inputValue);
    //console.log(this.state.inputValue);
  };

  // handleChange = event => {
  //   this.setState({ inputValue: document.getElementById("test1").value });
  // };

  render() {
    return (
      <div class="col-auto">
        <form class="form-inline" onSubmit={e => this.runSearch(e)}>
          <h2 style={{ padding: 10 }}>
            <span class="badge badge-success mt-2">{this.state.numOnline}</span>
          </h2>
          <input
            autoFocus="true"
            class="form-control mr-sm-2"
            type="search"
            //id="test1"
            //value={this.state.inputValue}
            placeholder="Search"
            aria-label="Search"
            //onSubmit="preventDefault()"
            //value={this.state.inputValue}
            //onSubmit={e => this.runSearch(e)}
            onChange={e => this.setQuery(e)}
          />
          <button
            onClick={this.handleSearch} //just for testing
            //onSubmit={e => this.runSearch(e)}
            //onChange={e => this.setQuery(e)}
            class="btn btn-secondary my-2 my-sm-2"
            //type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
