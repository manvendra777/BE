import React, { Component } from "react";
import axios from "axios";
import Invitation from "./Invitation";

class Getname extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: {},
    };
  }
  componentDidMount() {
    this.getName();
  }
  getName() {
    var persons;
    axios
      .get(`http://54.237.17.61/management/startup/profile/` + this.props.id)
      .then((res) => {
        persons = res.data;
        console.log(persons);
        this.setState({ myProfile: persons });
      });
  }

  render() {
    return (
      <div>
        <Invitation
          key={this.props.id}
          name={
            " " +
            this.state.myProfile.firstName +
            " " +
            this.state.myProfile.lastName
          }
          id={this.props.id}
          de={this.props.dem}
        />
      </div>
    );
  }
}

export default Getname;
