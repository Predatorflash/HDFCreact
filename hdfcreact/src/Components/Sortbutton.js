import React, { Component } from "react";
class Sortbutton extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-default ma2"
          id="highlowpercentage"
          onClick={this.props.clickbutton}
        >
          High-Low-Percentage
        </button>

        <button
          type="button"
          className="btn btn-default ma2"
          id="lowhighpercentage"
          onClick={this.props.clickbutton}
        >
          Low-High-Percentage
        </button>
      </div>
    );
  }
}

export default Sortbutton;
