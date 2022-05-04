import React from "react";
import ReactDOM from "react-dom/client";
import { PreviewGeneralInformation } from "./PreviewGeneralInformation.js";

export class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PreviewGeneralInformation details={this.props} />;
  }
}
