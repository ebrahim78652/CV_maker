import React from "react";
import ReactDOM from "react-dom/client";

export class PreviewExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PreviewExperience">
        <h1>Preview Experience</h1>
        <div>Company name: {this.props.companyName}</div>
        <div>Position title: {this.props.position}</div>
        <div>Worked From: {this.props.workStart}</div>
        <div>Work End: {this.props.workEnd}</div>
      </div>
    );
  }
}
