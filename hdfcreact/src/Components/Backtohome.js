import React, { Component } from "react";
class Backtohome extends Component {
  state = {};
  render() {
    return (
      <button
        className="f5 link dim ba ph5 pv2 mb2 dib mid-gray"
        onClick={this.props.backtohomeclick}
      >
        Backtohome
      </button>
    );
  }
}

export default Backtohome;
