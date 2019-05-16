import React, { Component } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "./App.css";
const FORMATSTRING = "dddd, MMMM D, YYYY h:mm:ss A";

class App extends Component {
  state = {
    date: dayjs(
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    ).format(FORMATSTRING),
    datePlusFortyFive: dayjs(
      new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    )
      .add(45, "days")
      .format(FORMATSTRING),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: dayjs(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      ).format(FORMATSTRING),
      datePlusFortyFive: dayjs(
        new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      )
        .add(45, "days")
        .format(FORMATSTRING),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Is this a hard thing to program?</h1>
        <h5>Today's Date: </h5>
        <div>{`${this.state.date}`}</div>
        <h5>Today's Date Plus 45: </h5>
        <div>{`${this.state.datePlusFortyFive}`}</div>
        <div
          style={{
            marginTop: "3rem",
          }}
        >
          Copyright by <b>Linus</b>, who says it's not hard to program.
        </div>
      </div>
    );
  }
}

export default App;
