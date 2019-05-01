import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  } // this on;ly fire when it catch error
  render() {
    if (this.state.hasError) {
      return <h1>Ooops Something goes wrong!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
