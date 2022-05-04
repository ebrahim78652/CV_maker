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
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Cv changeHandler={this.changeHandler} />

        <div className="dividerLine"></div>

        <CVPreview
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
