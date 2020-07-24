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
      .get(`http://54.237.17.61/management/mentor/photos/` + Cookies.get("id"))
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
      .get(`http://54.237.17.61/management/mentor/profile/` + Cookies.get("id"))
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
        <Link to="/mentorDashboard/Profile">
          <Card style={{ marginTop: 30 }}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Recipe"
                  variant="circle"
                  src={`data:image/jpeg;base64,${this.state.image}`}
                  className={classes.large}
                  style={{
                    border: 4,
                    marginLeft: 37,
                    border: "2px solid rgba(0, 0, 0, 0.23)",
                  }}
                />
              }
            />
            <center>
              <Typography
                variant="h7"
                color="primary"
                style={{ fontWeight: "bold" }}
              >
                <div>
                  {" "}
                  {" " +
                    this.state.myProfile.firstName +
                    " " +
                    this.state.myProfile.lastName}
                </div>
              </Typography>
            </center>{" "}
            <br></br>
            <Divider />
            <Typography
              variant="h8"
              style={{ color: "#696969", marginLeft: 5 }}
            >
              Connections
            </Typography>
            <br />
            <Typography
              variant="h8"
              style={{ marginLeft: 5, fontWeight: "bold" }}
            >
              Startup
            </Typography>
            <br />
            <Typography
              variant="h8"
              style={{ marginLeft: 5, fontWeight: "bold" }}
            >
              Investor
            </Typography>
          </Card>
        </Link>
      </div>
    );
  }
}
export default withStyles(useStyles)(Advertise);
