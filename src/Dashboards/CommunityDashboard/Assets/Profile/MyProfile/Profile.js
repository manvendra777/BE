import React, { Component } from "react";
import axios from "axios";
import Name from "./Assets/Name";
import About from "./Assets/About";
import Cookies from "js-cookie";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myProfile: {},
    };
  }

  componentDidMount() {
    var myid = Cookies.get("id");
    var persons;

    axios
      .get(`http://localhost:8082/management/community/profile/` + myid)
      .then((res) => {
        persons = res.data;
        console.log(persons);
        this.setState({ myProfile: persons });
      });
  }
  render() {
    return (
      <div style={{ marginLeft: "7%", marginRight: "auto", width: "70%" }}>
        <Name data={this.state.myProfile} />
      </div>
    );
  }
}
