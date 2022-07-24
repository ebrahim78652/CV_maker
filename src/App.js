import "./App.css";
import { Cv } from "./components/Cv";
import { CVPreview } from "./components/CvPreview";
import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nothing defined",
      phone: "nothing entered",
      email: "nothing entered",
      arrExperience: [
        {
          id: 1,
          companyName: "nothing ",
          position: "nothing",
          workStart: "nothing",
          workEnd: "nothing",
        },
      ],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  experienceChangeHandler = (event, id) => {
    let experienceThatChanged = this.state.arrExperience.filter(
      (element) => element.id === id
    );
    experienceThatChanged[0][event.target.id] = event.target.value;
    //changing the specific attribute of the experience
    let currentArrExperience = this.state.arrExperience.map(
      (element) =>
        experienceThatChanged.find(
          (changedElement) => changedElement.id === element.id
        ) || element
    );
    this.setState({ arrExperience: currentArrExperience });
  };

  addNewExperienceHandler = (event, id) => {
    let currentArrExperience = this.state.arrExperience;
    currentArrExperience.push({
      id: id,
      companyName: "nothing ",
      position: "nothing",
      workStart: "nothing",
      workEnd: "nothing",
    });
    this.setState({ arrExperience: currentArrExperience });
  };

  removeExperienceHandler = (event, id) => {
    let currentArrExperience = this.state.arrExperience;
    let updatedArrExperience = currentArrExperience.filter(
      (element) => element.id !== id
    );
    this.setState({ arrExperience: updatedArrExperience });
  };

  render() {
    return (
      <div className="App">
        <Cv
          changeHandler={this.changeHandler}
          experienceChangeHandler={this.experienceChangeHandler}
          addNewExperienceHandler={this.addNewExperienceHandler}
          removeExperienceHandler={this.removeExperienceHandler}
        />

        <div className="dividerLine"></div>
        <CVPreview
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          arrExperience={this.state.arrExperience}
        />
      </div>
    );
  }
}

export default App;
