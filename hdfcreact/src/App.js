import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import Startuplistshow from "./Components/Startuplistshow";
import "./Components/startup.css";

import ClickCard from "./Components/ClickCard";
import Backtohome from "./Components/Backtohome";
import Axios from "axios";
import Sortbutton from "./Components/Sortbutton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchstate: "",
      startuplist: [],
      clickstate: null,
      loading: true,
      clickbuttonstate: null
    };
  }
  clickbutton = event => {
    this.setState({ clickbuttonstate: event.target.id });
  };

  searchprop = event => {
    this.setState({ searchstate: event.target.value });
  };
  clickable = event => {
    this.setState({ clickstate: event.target.id });
  };
  static getDerivedStateFromError(error) {
    // render will show the fallback UI.
    console.log("indide error", error);
    return { clickstate: null };
  }
  componentDidMount = () => {
    //Making call to API
    Axios.get("http://starlord.hackerearth.com/kickstarter")
      .then(res => {
        this.setState({ startuplist: res.data, loading: false });
        console.log(res.data, "res");
      })
      .catch(console.log("errro"));
  };

  componentDidCatch(error, info) {
    //  error reporting service
    console.log("inside cdc", error, info);
  }
  render() {
    let filteredstartup = null;
    if (this.state.startuplist) {
      filteredstartup = this.state.startuplist.filter(startup => {
        return startup.title
          .toLowerCase()
          .includes(this.state.searchstate.toLowerCase());
      });
    }

    const homeroute = () =>
      this.setState({
        clickstate: null,
        searchstate: ""
      });
    const clickedstartupfinder = () => {
      return filteredstartup.filter(startup => {
        return startup.title.includes(this.state.clickstate);
      })[0];
    };

    const renderlogic = () => {
      return (
        <div>
          {this.state.clickstate === null ? (
            <div>
              <Searchbar searchfield={this.searchprop} />
              <Sortbutton clickbutton={this.clickbutton} />
              <div className="centrr">
                <Startuplistshow
                  filteredstartup={filteredstartup}
                  clickable={this.clickable}
                  clickbutton={this.state.clickbuttonstate}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="endee pa2">
                <Backtohome backtohomeclick={homeroute} />
              </div>
              {console.log(clickedstartupfinder())}
              <ClickCard
                startupname={this.state.clickstate}
                backtohomeclick={homeroute}
              >
                {clickedstartupfinder()}
              </ClickCard>
            </div>
          )}
        </div>
      );
    };

    const decisionmaker = () => {
      if (this.state.loading) return <h1>Loading . . .</h1>;
      else return renderlogic();
    };

    //  ----------------------------------------------------------------
    return (
      <div>
        <div>
          <header>
            <h1 className="display-2 tc">KickStarter Projects</h1>
          </header>
          <hr />
        </div>
        {decisionmaker()}
      </div>
    );
  }
}

export default App;
