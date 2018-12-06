import React, { Component } from "react";

import Showinfocard from "./Showinfocard";

class ClickCard extends Component {
  render() {
    const startup = () => {
      const atemp = Object.keys(this.props.children).map(key => {
        const keyobj = key.replace(".", "_");
        return { [keyobj]: this.props.children[key] };
      });
      return Object.assign({}, ...atemp);
    };
    return (
      <div onClick={this.props.backtohomeclick}>
        <h3 className="f2 fw4">{this.props.children.title} </h3>

        <Showinfocard detail={startup()} />
      </div>
    );
  }
}

export default ClickCard;
