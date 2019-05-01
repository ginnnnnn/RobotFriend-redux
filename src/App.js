import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
    cardSet: 1
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json()) //convert to json json()
      .then(users => this.setState({ robots: users }));
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  handleCardSetChange = event => {
    if (this.state.cardSet === 1) {
      this.setState({ cardSet: 2 });
    } else if (this.state.cardSet === 2) {
      this.setState({ cardSet: 3 });
    } else if (this.state.cardSet === 3) {
      this.setState({ cardSet: 4 });
    } else {
      this.setState({ cardSet: 1 });
    }
  };
  render() {
    const { robots, searchField, cardSet } = this.state;
    if (robots.length === 0) {
      return <h1 className="tc">Loading</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1 fw2 navy">Robot friends</h1>

        <div className="flex justify-center">
          <SearchBox
            searchChange={this.handleSearchChange}
            searchField={searchField}
          />
          <button
            className="ba br3 pa2 ma2 grow bg-gold w4"
            onClick={this.handleCardSetChange}
          >
            switch
          </button>
        </div>
        <CardList robots={robots} searchField={searchField} cardSet={cardSet} />
      </div>
    );
  }
}

export default App;
