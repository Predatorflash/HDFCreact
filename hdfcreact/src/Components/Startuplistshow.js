import React, { Component } from "react";
import Startupcard from "./Startupcard";
class Startuplist extends Component {
  render() {
    const sortedrenderlowtohigh = () =>
      this.props.filteredstartup.sort((value, value2) => {
        return (
          parseInt(value["percentage.funded"]) -
          parseInt(value2["percentage.funded"])
        );
      });
    const sortedrenderhightolow = () =>
      this.props.filteredstartup.sort((value, value2) => {
        return (
          parseInt(value2["percentage.funded"]) -
          parseInt(value["percentage.funded"])
        );
      });
    const defaultlist = () => this.props.filteredstartup;

    const buttonlogic = () => {
      if (this.props.clickbutton === "highlowpercentage") {
        let a = sortedrenderhightolow();

        return a;
      } else if (this.props.clickbutton === "lowhighpercentage") {
        let a = sortedrenderlowtohigh();
        return a;
      }
      return defaultlist();
    };

    const renderr = buttonlogic().map((value, i) => {
      return (
        <Startupcard
          key={i}
          name={value.title}
          by={value.by}
          percentage={value["percentage.funded"]}
          clickable={this.props.clickable}
        />
      );
    });

    return renderr;
  }
}

export default Startuplist;
