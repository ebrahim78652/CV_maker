import React from "react";
import "./styles/generalInformation.css";

export class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  removeButton = (event) => {
    //this.props.removeButtonClicked(event);
    this.props.onRemoveButton(event, this.props.id);
  };

  render() {
    let experienceChangeHandler = this.props.experienceChangeHandler;

    let id = this.props.id;
    return (
      <div className="Experience">
        <div className="alignHeader">
          <h1>Experience</h1>
        </div>
        <form action="">
          <label htmlFor="companyName">
            Company name:
            <input
              type="text"
              id="companyName"
              placeholder="Enter company name here"
              onChange={(event) => {
                experienceChangeHandler(event, id);
              }}
            />
          </label>

          <label htmlFor="text">
            Position title:
            <input
              type="text"
              id="position"
              placeholder="Enter your position"
              onChange={(event) => {
                experienceChangeHandler(event, id);
              }}
            />
          </label>

          <label htmlFor="workStart">
            Worked From:
            <input
              type="date"
              id="workStart"
              onChange={(event) => {
                experienceChangeHandler(event, id);
              }}
            />
          </label>

          <label htmlFor="workEnd">
            Work End:
            <input
              type="date"
              id="workEnd"
              onChange={(event) => {
                experienceChangeHandler(event, id);
              }}
            />
          </label>
        </form>

        <button onClick={this.removeButton}>Remove</button>
      </div>
    );
  }
}
