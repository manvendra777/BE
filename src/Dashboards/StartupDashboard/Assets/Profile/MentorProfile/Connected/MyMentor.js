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
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Checkmark } from "react-checkmark";
import Cookies from "js-cookie";
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1, 1, 1, 1),
      padding: theme.spacing(1, 0, 2, 0),
      width: "80%",
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

class MyMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: [],
      val: [],
      avg: "",
      myrating: 0,
      isVerified: false,
      image: null,
      numberOfConn: 0,
      getMyPrevious: [],
      getMyCurrent: [],
    };
    this.mapDomain = this.mapDomain.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.getLogs = this.getLogs.bind(this);

    this.getRating = this.getRating.bind(this);
    this.getRatingAv = this.getRatingAv.bind(this);

    this.gateMyRating = this.gateMyRating.bind(this);

    this.isVerified = this.isVerified.bind(this);
  }
  componentWillMount() {
    this.getNumberOfConnections();
    this.getInfo();
    this.getRating();
    this.getRatingAv();
    this.gateMyRating();
    this.isVerified();
    this.getImage();
    this.getCurrent();
    this.getPrevious();
  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(
        `http://54.237.17.61/management/mentor/photos/` +
        this.props.match.params.id
      )
      .then((res) => {
        mem = res.data;
        self.setState({ image: mem });
      });
  }
  isVerified() {
    var id = this.props.match.params.id;
    var isVerified;
    axios
      .get(`http://54.237.17.61/ratings/isVerified`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        isVerified = res.data;
        this.setState({ isVerified: isVerified });
      });
  }
  getInfo() {
    var id = this.props.match.params.id;
    var persons;
    axios
      .get(`http://54.237.17.61/management/mentor/profile/` + id)
      .then((res) => {
        persons = res.data;
        this.setState({ myProfile: persons });
      });
  }

  gateMyRating() {
    var myid = Cookies.get("id");
    var my = 0;
    axios
      .get(`http://54.237.17.61/ratings/get`, {
        params: { provider: myid, entity: this.props.match.params.id },
      })
      .then((res) => {
        my = res.data;
        console.log(my);

        this.setState({ myrating: my });
      });
  }
  setMyRating(rating) {
    var myid = Cookies.get("id");
    var m = this.props.match.params.id;
    //54.237.17.61:8080/ratings/save
    axios
      .post("http://54.237.17.61/ratings/save", {
        entityId: m,
        providerId: myid,
        value: rating,
      })
      .then((res) => { });
  }

  getRating() {
    var avg;
    axios
      .get(`http://54.237.17.61/ratings/getRatingCount`, {
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
      .get(`http://54.237.17.61/ratings/getRatingAverage`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        rate = res.data;
        console.log(rate);
        this.setState({ avg: rate });
      });
  }

  removeMentor = () => {
    var myid = Cookies.get("id");
    console.log("sent");
    axios
      .post(`http://54.237.17.61/entityAction/user/removeConnection`, null, {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        window.location = "/startupDashboard/FindMentors";
      });
  };
  getPrevious = () => {
    var profileId = this.props.match.params.id;
    var response;
    axios
      .get("http://54.237.17.61/entityAction/getMyPrevious", {
        params: { id: profileId },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
        if (response != "") {
          response.map((item, i) => {
            axios
              .get("http://54.237.17.61/security/getTypeById?id=" + item)
              .then((res) => {
                userType = res.data;
                var persons;
                var userType;
                axios
                  .get(
                    `http://54.237.17.61/management/` +
                    userType +
                    `/profile/` +
                    item
                  )
                  .then((res) => {
                    persons = res.data;
                    console.log(persons);
                    this.setState({
                      getMyPrevious: [
                        ...this.state.getMyPrevious,
                        <div>
                          {persons.firstName + "  " + persons.lastName}
                        </div>,
                      ],
                    });
                  });
              });
          });
        }
      });
  };

  getCurrent = () => {
    var profileId = this.props.match.params.id;
    var response;
    axios
      .get("http://54.237.17.61/entityAction/getMyCurrent", {
        params: { id: profileId },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
        if (response != "") {
          response.map((item, i) => {
            axios
              .get("http://54.237.17.61/security/getTypeById?id=" + item)
              .then((res) => {
                userType = res.data;
                var persons;
                var userType;
                axios
                  .get(
                    `http://54.237.17.61/management/` +
                    userType +
                    `/profile/` +
                    item
                  )
                  .then((res) => {
                    persons = res.data;
                    console.log(persons);
                    this.setState({
                      getMyCurrent: [
                        ...this.state.getMyCurrent,
                        <div>
                          {persons.firstName + "  " + persons.lastName + ", "}
                        </div>,
                      ],
                    });
                  });
              });
          });
        }
      });
  };
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
  getNumberOfConnections = () => {
    axios
      .get(`http://54.237.17.61/entityAction/user/numberOfConnections`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        var numberOfConn = res.data;
        console.log(numberOfConn);
        this.setState({ numberOfConn: numberOfConn });
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card elevation={3}>
          <Container className={classes.cont} style={{ marginBottom: 20 }}>
            <Avatar
              src={`data:image/jpeg;base64,${this.state.image}`}
              alt="Sanket"
              className={classes.large}
            />
            <Divider
              style={{ marginLeft: 10 }}
              orientation="vertical"
              flexItem
            />
            <Container className={classes.spc}>
              <Typography variant="h4" color="primary" gutterBottom>
                {this.state.myProfile.firstName +
                  " " +
                  this.state.myProfile.lastName}
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
                  this.state.myProfile.country}
              </Typography>
              <div style={{ width: 100 }}>
                {this.state.isVerified ? (
                  <div style={{ display: "flex" }}>
                    <Checkmark size={25} color="blue" />
                    Verified
                  </div>
                ) : (
                    <div></div>
                  )}
              </div>
              <div>{this.mapDomain()}</div>
            </Container>
            <Divider
              style={{ marginLeft: 10, marginRight: 20 }}
              orientation="vertical"
              flexItem
            />
            <RatingStats
              ratings={this.state.val}
              ratingAverage={Math.round(this.state.avg * 10) / 10}
              raterCount={this.state.val.reduce((a, b) => a + b, 0)}
            />
            ,
          </Container>
          <Divider style={{ marginBottom: 10 }} />
          <Button
            variant="contained"
            style={{ marginLeft: 30 }}
            onClick={this.removeMentor}
            size="small"
            color="primary"
          >
            Remove as a Mentor
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: 30 }}
            onClick={() => {
              window.location = "/startupDashboard/Messaging";
            }}
            size="small"
            color="primary"
          >
            Send Message
          </Button>
          <span style={{ marginLeft: 30 }}>
            {" "}
            Number of Connections : {this.state.numberOfConn}
          </span>
          <Rater
            style={{ marginLeft: 80, transform: "scale(1.5)" }}
            rating={this.state.myrating}
            total={5}
            interactive={true}
            onRate={({ rating }) => {
              this.setMyRating(rating);
            }}
          />

          <Divider style={{ marginTop: 10 }} />

          <Container style={{ marginLeft: 10, marginTop: 10, display: "block" }}>
            
            <div style={{ display: 'flex' }}>
              <div>
                <div style={{ display: "flex", alignText: "center" }}>

                  <Typography variant="h5" color="primary" gutterBottom>
                    Qualification:
                  </Typography>
                  <div
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      fontSize: 22,
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
                      fontSize: 22,
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
                    phone:
              </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5>{this.state.myProfile.phone_no}</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignText: "center" }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Experience in domain:
              </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5> {this.state.myProfile.experience_in_domain}</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignText: "center" }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Description:
              </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5> {this.state.myProfile.about_yourself}</h5>
                  </div>
                </div>
                <div style={{ display: "flex", alignText: "center" }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    About Previous Works:
              </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5> {this.state.myProfile.aboutWork}</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignText: "center" }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Incentive:
              </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5>{this.state.myProfile.incentive}</h5>
                  </div>
                </div>
              </div>
             
              <Divider style={{ marginRight: 'auto', marginLeft: 'auto' }} orientation="vertical" flexItem />
              <div style={{ marginRight: 'auto',marginTop:'7%', }}>

                <div style={{ display: "flex", alignText: "center" }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Currently mentoring:
                  </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5> {this.state.getMyCurrent.map((child) => child)}</h5>
                  </div>
                </div>

                <div style={{ display: "flex", alignText: "center",marginTop:20 }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Previously mentored:
                  </Typography>
                  <div
                    style={{
                      fontSize: 22,
                      marginLeft: 7,
                      color: "#424242",
                    }}
                  >
                    {" "}
                    <h5>{this.state.getMyPrevious.map((child) => child)}</h5>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(MyMentor);
