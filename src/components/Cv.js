import React from "react";
import { GeneralInformation } from "./GeneralInformation";
import { Experience } from "./Experience";

export class Cv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrExperience: [{ id: 1 }] };
    this.count = 1;
  }

  addExperienceButtonClicked = (event) => {
    this.setState({
      arrExperience: [...this.state.arrExperience, { id: ++this.count }],
    });
  };

  removeButtonClicked = (event, experienceId) => {
    console.log(event);
    console.log(experienceId);
    let arrExperience = this.state.arrExperience;
    let updatedArrExperience = arrExperience.filter(
      (element) => element.id !== experienceId
    );
    console.log(updatedArrExperience);
    this.setState({ arrExperience: updatedArrExperience });
  };

  render() {
    const ExperienceItems = this.state.arrExperience.map((element) => (
      <Experience
        key={element.id}
        id={element.id}
        onRemoveButton={this.removeButtonClicked}
      />
    ));
    return (
      <div className="Cv">
        <GeneralInformation changeHandler={this.props.changeHandler} />
        {ExperienceItems}
        <button onClick={this.addExperienceButtonClicked}>
          Add Experience Section{" "}
        </button>
      </div>

      //now return the experience component
    );
  }
}
