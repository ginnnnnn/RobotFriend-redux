import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

import { setSearchfield, requestRobots, switchCardset } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    cardSet: state.searchRobots.cardSet,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
//state -> store, got store to check searchRobots and take searchField
//,then set it as searchField to props

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: event => dispatch(setSearchfield(event.target.value)),
    handleCardSetChange: event => dispatch(switchCardset()),
    handleRobotsRequest: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.handleRobotsRequest();
  }

  render() {
    const {
      searchField,
      cardSet,
      handleSearchChange,
      robots,
      isPending,
      error
    } = this.props;

    if (isPending) {
      //if length === 0 ,in js mean false,!false ===true
      return <h1 className="tc">Loading</h1>;
    }
    if (error) {
      console.log("error", error);
      return <h1 className="tc">{error}</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1 fw2 navy">Robot friends</h1>

        <div className="flex justify-center">
          <SearchBox
            searchChange={handleSearchChange}
            searchField={searchField}
          />
          <button
            className="ba br3 pa2 ma2 grow bg-gold w4"
            onClick={this.props.handleCardSetChange}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

//connect is a higher order function for subscrition of store to App
//connect() runs and return another function that takes app as argument
