import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import RatingStats from "./Rating/RatingStats";
import Cookies from "js-cookie";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1, 1, 1, 1),
      padding: theme.spacing(1, 0, 2, 0),
      width: "74%",
      marginLeft: "2%",
      marginTop: "5%",
    },
  },
  cont: {
    display: "flex",
    margin: "5px 0px 0px 5px ",
    alignItems: "center",
    marginBotton: 200,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  spc: {
    display: "",
    alignText: "center",
  },
});

class MyStartup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: [],
      val: [],
      avg: "",
      setReq: false,
      image: null,
      Mystatus: "",
    };
    this.mapDomain = this.mapDomain.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.getLogs = this.getLogs.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRatingAv = this.getRatingAv.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.checkSentReq = this.checkSentReq.bind(this);
  }
  componentWillMount() {
    this.getInfo();
    this.getRating();
    this.getRatingAv();
    this.checkSentReq();
    this.getImage();
  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(
        `http://50.19.216.143/management/startup/photos/` +
          this.props.match.params.id
      )
      .then((res) => {
        mem = res.data;
        self.setState({ image: mem });
      });
  }
  getInfo() {
    var id = this.props.match.params.id;
    var persons;
    axios
      .get(`http://50.19.216.143/management/startup/profile/` + id)
      .then((res) => {
        persons = res.data;
        this.setState({ myProfile: persons });
      });
  }
  getLogs() {
    console.log(this.state.myProfile);
  }
  mapDomain() {
    if (this.state.myProfile.domain != undefined) {
      return this.state.myProfile.domain.map((item, i) => (
        <Chip
          color="primary"
          style={{ marginLeft: 5, margin: 2 }}
          label={item}
        />
      ));
    }
  }

  getRating() {
    var avg;
    axios
      .get(`http://50.19.216.143/ratings/getRatingCount`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        avg = res.data;
        avg = avg.reverse();
        this.setState({ val: avg });
      });
  }
  getRatingAv() {
    var rate;
    axios
      .get(`http://50.19.216.143/ratings/getRatingAverage`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        rate = res.data;
        console.log(rate);
        this.setState({ avg: rate });
      });
  }

  sendRequest() {
    var myid = Cookies.get("id");
    var response;
    axios
      .post("http://50.19.216.143/entityAction/user/sendRequest", null, {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
      });
  }
  checkSentReq() {
    var myid = Cookies.get("id");
    var response;
    axios
      .get("http://50.19.216.143/entityAction/user/checkRequest", {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
        this.setState({ setReq: response });
      });
  }
  removeMentor = () => {
    var myid = Cookies.get("id");
    console.log("sent");
    axios
      .post(`http://50.19.216.143/entityAction/user/removeConnection`, null, {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        window.location = "/mentorDashboard/FindStartup";
      });
  };
  getStatus = () => {
    var myId = this.props.match.params.id;
    var self = this;
    axios
      .post(`http://50.19.216.143/management/startup/profile/getStatus`, null, {
        params: { id: myId },
      })
      .then((res) => {
        var persons = res.data;
        console.log(persons);
        self.setState({ Mystatus: persons });
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card elevation={3}>
          <Container className={classes.cont} style={{ marginBottom: 20 }}>
            <Avatar
              alt="Sanket"
              src={`data:image/jpeg;base64,${this.state.image}`}
              className={classes.large}
            />
            <Divider
              style={{ marginLeft: 10 }}
              orientation="vertical"
              flexItem
            />
            <Container className={classes.spc}>
              <Typography variant="h4" color="primary" gutterBottom>
                {this.state.myProfile.startupName}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {this.state.myProfile.firstName +
                  " " +
                  this.state.myProfile.lastName +
                  " : (" +
                  this.state.Mystatus +
                  ")"}
              </Typography>
              <Typography
                style={{ color: "#424242" }}
                variant="h5"
                gutterBottom
              >
                Address:{" "}
                {this.state.myProfile.address +
                  ", " +
                  this.state.myProfile.city +
                  ", " +
                  this.state.myProfile.postalCode +
                  ", " +
                  this.state.myProfile.country}
              </Typography>
              <div>{this.mapDomain()}</div>
            </Container>
            <Divider
              style={{ marginLeft: 10, marginRight: 20 }}
              orientation="vertical"
              flexItem
            />
          </Container>
          <Divider style={{ marginBottom: 10 }} />

          <Button
            variant="contained"
            style={{ marginLeft: 30 }}
            onClick={this.removeMentor}
            size="small"
            color="primary"
          >
            Remove Startup
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: 30 }}
            onClick={() => {
              window.location = "/mentorDashboard/Messaging";
            }}
            size="small"
            color="primary"
          >
            Send Message
          </Button>

          <Divider style={{ marginTop: 10 }} />
          <Container
            style={{ marginLeft: 10, marginTop: 10, display: "block" }}
          >
            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Qualification:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.qualification}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Email:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.email}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                DIPP No:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.dipp_no}</h5>
              </div>
            </div>
            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Website:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.websiteURL}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Year of Foundation:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.yearOfFoundation}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Expectations:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.expectations}</h5>
              </div>
            </div>
            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Is the startup Already Running?:
              </Typography>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 7,
                  color: "#424242",
                }}
              >
                {" "}
                <h5>{this.state.myProfile.alreadyRunning}</h5>
              </div>
            </div>
          </Container>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(MyStartup);
