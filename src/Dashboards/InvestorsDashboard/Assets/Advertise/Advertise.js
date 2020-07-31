import React, { useState, Component } from "react";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Cookies from "js-cookie";
import { shadows } from "@material-ui/system";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea'
import './sidebar.css'


const useStyles = (theme) => ({
  root: {
    width: "15%",
    margin: 0,
    position: "fixed",
    height: "90%",
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
});

class Advertise extends Component {
  constructor(props) {
    super(props);
    console.log(Cookies.get("id"));
    this.state = {
      members: [],
      image: null,
      myProfile: {},
    };
    this.getImage = this.getImage.bind(this);
  }

  componentWillMount() {
    this.getImage();
    this.getName();
  }

  getImage() {
    var self = this;
    var mem;
    axios
      .get(`http://50.19.216.143/management/investor/photos/` + Cookies.get("id"))
      .then((res) => {
        mem = res.data;
        self.setState({ image: mem });
      });
  }
  showImage() {
    return <img src={`data:image/jpeg;base64,${this.state.image}`} />;
  }

  getName() {
    var persons;
    axios
      .get(`http://50.19.216.143/management/investor/profile/` + Cookies.get("id"))
      .then((res) => {
        persons = res.data;
        console.log(persons);
        this.setState({ myProfile: persons });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card onClick={() => { window.location = '/investorDashboard/Profile' }} elevation={2} >
          <CardActionArea style={{ background: "white", width: '100%', height: 400, textAlign: 'center', padding: 20 }}>
            <div className="text-center"> <img src={`data:image/jpeg;base64,${this.state.image}`} style={{ height: 100, width: 100 }} className="rounded-circle" />
              <h3 className="mt-2"> {" "}{" " + this.state.myProfile.firstName + " " + this.state.myProfile.lastName}</h3> <span style={{ color: '#5c6bc0' }} className="mt-1 clearfix">{this.state.myProfile.aboutWork}</span>
              <Divider variant="middle" /><br />
              <small className="mt-4">{this.state.myProfile.investments}</small>
              <div className="social-buttons mt-5">
                <div>
                  {this.state.myProfile.email}
                </div>
              </div>
            </div>
          </CardActionArea >
        </Card >
        <div>
          <Card elevation={2} style={{ marginTop: 20 }}>
            <CardActionArea style={{ background: "white", width: '100%', height: 435, textAlign: 'center', padding: 20 }}>
              <div className="text-center">
                <h3 className="mt-2"> {" "}{" " + "Investment made EASY" + " "}{" "}</h3> <span style={{ color: '#5c6bc0', fontSize: 20 }} className="mt-1 clearfix">"Groww - Online"</span>
                <Divider variant="middle" /><br />
                <small className="mt-4">Online Demat, Trading and Direct Mutual Fund</small>
                <br /> <small className="mt-4"> 200 credits added </small>
                <br /><div style={{ marginTop: 20 }}> If you register from this link!</div>
                <large style={{ marginTop: 40 }}>CALL ON : 975757575</large>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Advertise);
