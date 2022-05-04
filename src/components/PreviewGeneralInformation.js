import React from "react";
import ReactDOM from "react-dom/client";

export class PreviewGeneralInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const generalInformation = this.props.details;
    let name = generalInformation.name;
    let email = generalInformation.email;
    let phone = generalInformation.phone;
    return (
      <div className="PreviewGeneralInformation">
        <h1>Preview General Information</h1>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
      </div>
    );
  }
}
