import React, { Component } from "react";

import { Link, Route } from "react-router-dom";
import Header from "./Assets/header";
import Cards from "./Assets/CardFront";
import Cardo from "./Assets/card";
import photo1 from './Assets/photo/startup.jpg'
import photo2 from './Assets/photo/mentor.png'
import photo3 from './Assets/photo/investors.jpg'
import photo4 from './Assets/photo/community.jpg'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import WaterText from '../Animations/WaterText'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


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
      <div style={{ height: "100vh", backgroundColor: '#b2dfdb', paddingTop: '7%' }}>

        <div style={{ opacity: 0.3, position: 'absolute', top: 0, left: 0, width: '100%' }}>
          <div style={{ display: 'flex' }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '6%', marginTop: '0%', marginBottom: '4%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '10%', marginTop: '12%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '25%', marginBottom: '10%' }} />

          </div>
          <div style={{ display: 'flex' }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
          </div>

          <div style={{ display: 'flex' }}>
            <img src={url('cloud')} style={{ display: 'block', width: '7%', marginLeft: '2%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '65%' }} />
          </div>

          <div style={{ display: 'flex' }}>
            
            <img src={url('cloud')} style={{ display: 'block', width: '17%', marginLeft: '22%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '14%',marginTop:'-10%' }} />
          </div>
        </div>

        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '40%', }} >
          <WaterText />
        </div>

        <div style={{ display: "flex", width: "100%", marginTop: "3%" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}>

            <Cardo
              method={this.gotoStartup}
              style={{ position: "absolute" }}
              info="Startups are companies or ventures that are focused around a single product or service that the founders want to bring to market. These companies typically don't have a fully developed business model and, more importantly, lack adequate capital to move on to the next phase of business."
              type="Startup"
              src={photo1}
            />
            <Cardo
              method={this.gotoMentor}
              style={{ position: "absolute" }}
              info="Startup mentor is person who help you establish your startup in the very initial days. As a startup founder one may have many things to figure out depending upon what kind of business it is. And founders are not equally skilled in all aspects. So, they seek for person who have done the same."
              type="Mentor"
              src={photo2}
            />
            <Cardo
              method={this.gotoInvestor}
              style={{ position: "absolute" }}
              info="When venture capital investors invest in a startup, they are putting down capital in exchange for a portion of ownership in the company and rights to its potential future profits. By doing so, investors are forming a partnership with the startups they choose to invest in accordint to their domain"
              type="Investor"
              src={photo3}
            />

            <Cardo
              method={this.gotoCommunity}
              style={{ position: "absolute" }}
              info="A startup community is just that, a community. There is not a mayor or president of the community, but instead a wide-array of volunteer leaders with aligned interests and passions to support entrepreneurs in building startups. Strong ethos of generosity will help bring the community together. "
              type="Community"
              src={photo4}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
