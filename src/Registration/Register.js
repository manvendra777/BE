import React, { Component } from "react";

import { Link, Route } from "react-router-dom";
import Header from "./Assets/header";
import Cards from "./Assets/CardFront";
import Cardo from "./Assets/card";
export class Register extends Component {
  gotoMentor = () => {
    window.location = "registerMentor";
  };
  gotoStartup = () => {
    window.location = "registerStartup";
  };
  gotoInvestor = () => {
    window.location = "registerInvestor";
  };
  gotoCommunity = () => {
    window.location = "registerCommunity";
  };
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex", width: "100%", marginTop: "15%" }}>
          <div
            style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
          >
            <Cardo
              method={this.gotoMentor}
              style={{ position: "absolute" }}
              info="Startup mentor is person who help you establish your startup in the very initial days. As a startup founder one may have many things to figure out depending upon what kind of business it is. And founders are not equally skilled in all aspects. So, they seek for person who have done the same."
              type="Mentor"
              src="./assets/mentor.jpeg"
            />

            <Cardo
              method={this.gotoStartup}
              style={{ position: "absolute" }}
              info="Startups are companies or ventures that are focused around a single product or service that the founders want to bring to market. These companies typically don't have a fully developed business model and, more importantly, lack adequate capital to move on to the next phase of business."
              type="Startup"
              src="./assets/startup.jpeg"
            />

            <Cardo
              method={this.gotoInvestor}
              style={{ position: "absolute" }}
              info="When venture capital investors invest in a startup, they are putting down capital in exchange for a portion of ownership in the company and rights to its potential future profits. By doing so, investors are forming a partnership with the startups they choose to invest in accordint to their domain"
              type="Investor"
              src="./assets/investor.jpeg"
            />

            <Cardo
              method={this.gotoCommunity}
              style={{ position: "absolute" }}
              info="A startup community is just that, a community. There is not a mayor or president of the community, but instead a wide-array of volunteer leaders with aligned interests and passions to support entrepreneurs in building startups. Strong ethos of generosity will help bring the community together. "
              type="Community"
              src="./assets/community.jpeg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
