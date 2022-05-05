import React from "react";
import ReactDOM from "react-dom/client";
import { PreviewGeneralInformation } from "./PreviewGeneralInformation.js";
import { PreviewExperience } from "./PreviewExperience";

export class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*  let Experiences = this.prop.arrExperience.map((Experience) => {
      return (
        <PreviewExperience
          key={Experience.id}
          companyName={Experience.companyName}
        ></PreviewExperience>
      );
    }); */

    let Experiences = this.props.arrExperience.map((Experience) => {
      return (
        <PreviewExperience
          key={Experience.id}
          companyName={Experience.companyName}
          position={Experience.position}
          workStart={Experience.workStart}
          workEnd={Experience.workEnd}
        ></PreviewExperience>
      );
    });

    return (
      <div className="cvPreview">
        <PreviewGeneralInformation details={this.props} />
        {Experiences}
      </div>
    );
  }
}
