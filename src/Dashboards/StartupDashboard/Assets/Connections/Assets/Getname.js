import React, { Component } from "react";
import axios from "axios";
import Invitation from "./Invitation";

class Getname extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usertype: "",
      myProfile: {},
    };
  }
  componentDidMount() {
    this.getName();
  }
  getName() {
    var userType;
    axios
      .get("http://50.19.216.143/security/getTypeById?id=" + this.props.id)
      .then((res) => {
        userType = res.data;

        this.setState({ usertype: userType });

        var persons;
        axios
          .get(
            `http://50.19.216.143/management/` + 
              this.state.usertype +
              `/profile/` +
              this.props.id
          )
          .then((res) => {
            persons = res.data;
            console.log(persons);
            this.setState({ myProfile: persons });
          });
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
