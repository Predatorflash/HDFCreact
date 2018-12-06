import React, { Component } from "react";

class Startupcard extends Component {
  hsl_col_perc = percent => {
    let c = 0;
    if (percent > 300) c = 300;
    else {
      let a = percent / 300;
      c = 100 * a;
    }

    // Return a CSS HSL string
    console.log("i am ", this.props.percentage_funded);
    return "hsl(" + c + ", 100%, 50%)";
  };

  render() {
    return (
      <div>
        <div
          className="bg-lightest-blue dib br3 pa3 ma3 grow bw4 shadow-5 h5 w5"
          onClick={this.props.clickable}
          id={this.props.name}
        >
          <h4
            className="centrr"
            id={this.props.name}
            onClick={this.props.clickable}
          >
            {this.props.name}
          </h4>
          <h5
            style={{
              background: this.hsl_col_perc(this.props.percentage)
            }}
            onClick={this.props.clickable}
            id={this.props.name}
          >
            Percentage:{this.props.percentage}
          </h5>
          <h5
            className="tr v-btm fw4"
            onClick={this.props.clickable}
            id={this.props.name}
          >
            -{this.props.by}
          </h5>
        </div>
      </div>
    );
  }
}

export default Startupcard;
