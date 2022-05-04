import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/generalInformation.css";

export class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    //leave the state for now;
  }

  render() {
    const { changeHandler } = this.props;

    return (
      <div className="generalInformation">
        <div className="alignHeader">
          <h1>General Information</h1>
        </div>
        <form action="">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              placeholder="Enter your name here"
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="phone">
            Phone:
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number here"
              onChange={changeHandler}
            />
          </label>
          <button type="submit">Done</button>
        </form>
      </div>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
