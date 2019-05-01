import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
    cardSet: 1
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json()) //convert to json, json()
      .then(users => this.setState({ robots: users }));
  }

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  handleCardSetChange = event => {
    const rn = Math.floor(Math.random() * 2) + 1; //return 1 or 2
    if (this.state.cardSet <= 2) {
      this.setState(prevState => {
        return { cardSet: prevState.cardSet + rn };
      });
    } else {
      this.setState(prevState => {
        return { cardSet: prevState.cardSet - rn };
      });
    }
  };

  render() {
    const { robots, searchField, cardSet } = this.state;
    if (!robots.length) {
      //if length === 0 ,in js mean false,!false ===true
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
        <Scroll>
          <ErrorBoundry>
            <CardList
              robots={robots}
              searchField={searchField}
              cardSet={cardSet}
            />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
