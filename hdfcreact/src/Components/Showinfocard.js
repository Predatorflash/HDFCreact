import React, { Component } from "react";
class ShowinfoCard extends Component {
  formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: this.props.detail.currency.toUpperCase(),
    minimumFractionDigits: 2
  });
  render() {
    const append = () => "https://www.kickstarter.com" + this.props.detail.url;
    const time = () => {
      return this.props.detail.end_time.split("T");
    };
    return (
      <div className="madd ">
        <div className="bg-lightest-blue dib pa3 shadow-5 grow br4 ml6  mr6 mt3 mb3">
          <div className="tc">
            <div className="madd">
              <h2 className="fw4">Founder - {this.props.detail.by}</h2>
            </div>
          </div>
          <h3 className="fw4 bg-light-blue">
            Location :{this.props.detail.location} ,{this.props.detail.country}
          </h3>
          <h3 className="fw4">
            Percentage Funded :{this.props.detail.percentage_funded} %{" "}
          </h3>
          <h3 className="fw4 bg-light-blue">
            Amount Pledged:
            {this.formatter.format(this.props.detail.amt_pledged)}{" "}
          </h3>
          <h3 className="fw4">
            End Time :{time()[0]}, {time()[1]}{" "}
          </h3>
          <h3 className="fw4  bg-light-blue">
            Number Of Backers :{this.props.detail.num_backers}{" "}
          </h3>
          <h3 className="fw4">Description :</h3>
          <h4 className="fw4">{this.props.detail.blurb} </h4>

          <h3 className="fw4  bg-light-blue">
            Link :<a href={append()}>Startup website</a>
          </h3>
        </div>
      </div>
    );
  }
}

export default ShowinfoCard;
