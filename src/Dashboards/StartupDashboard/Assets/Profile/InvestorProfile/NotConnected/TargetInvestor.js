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
import { ToastContainer, toast } from "react-toastify";
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

class TargetInvestor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProfile: [],
      val: [],
      avg: "",
      setReq: false,
      image: null,
      numberOfConn: 0,
      getMyPrevious: [],
      getMyCurrent: [],
    };
    this.getInfo = this.getInfo.bind(this);

    this.sendRequest = this.sendRequest.bind(this);
    this.checkSentReq = this.checkSentReq.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(
        `http://localhost:8082/management/investor/photos/` +
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
      .get(`http://localhost:8082/management/investor/profile/` + id)
      .then((res) => {
        persons = res.data;
        this.setState({ myProfile: persons });
        console.log(this.state.myProfile);
      });
  }

  sendRequest() {
    var myid = Cookies.get("id");
    var response;
    axios
      .post("http://localhost:8083/entityAction/user/sendRequest", null, {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        response = res.data;
        toast.success("connection request sent successfully !", {
          position: "bottom-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  checkSentReq() {
    var myid = Cookies.get("id");
    var response;
    axios
      .get("http://localhost:8083/entityAction/user/checkRequest", {
        params: { id: myid, target: this.props.match.params.id },
      })
      .then((res) => {
        response = res.data;
        this.setState({ setReq: response });
      });
  }
  componentWillMount() {
    this.getNumberOfConnections();
    this.checkSentReq();
    this.getImage();
    this.getInfo();
    this.getCurrent();
    this.getPrevious();
  }
  getPrevious = () => {
    var profileId = this.props.match.params.id;
    var response;
    axios
      .get("http://localhost:8083/entityAction/getMyPrevious", {
        params: { id: profileId },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
        if (response != "") {
          response.map((item, i) => {
            axios
              .get("http://localhost:8081/security/getTypeById?id=" + item)
              .then((res) => {
                userType = res.data;
                var persons;
                var userType;
                axios
                  .get(
                    `http://localhost:8082/management/` +
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
      .get("http://localhost:8083/entityAction/getMyCurrent", {
        params: { id: profileId },
      })
      .then((res) => {
        response = res.data;
        console.log(response);
        if (response != "") {
          response.map((item, i) => {
            axios
              .get("http://localhost:8081/security/getTypeById?id=" + item)
              .then((res) => {
                userType = res.data;
                var persons;
                var userType;
                axios
                  .get(
                    `http://localhost:8082/management/` +
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

  getNumberOfConnections = () => {
    axios
      .get(`http://localhost:8083/entityAction/user/numberOfConnections`, {
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
              <Typography variant="h4" gutterBottom></Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {this.state.myProfile.firstName +
                  " " +
                  this.state.myProfile.lastName}
              </Typography>
            </Container>
          </Container>
          <Divider style={{ marginBottom: 10 }} />
          <Button
            variant="contained"
            disabled={this.state.setReq}
            style={{ marginLeft: 30 }}
            size="small"
            onClick={this.sendRequest}
            color="primary"
          >
            Send Invitation
          </Button>
          <Divider style={{ marginTop: 10 }} />
          <Container
            style={{ marginLeft: 10, marginTop: 10, display: "block" }}
          >
            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Min investment:
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
                <h5>{this.state.myProfile.min}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Max investment:
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
                <h5>{this.state.myProfile.max}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Age:
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
                <h5> {this.state.myProfile.age}</h5>
              </div>
            </div>
            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Current:
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
                <h5> {this.state.getMyCurrent.map((child) => child)}</h5>
              </div>
            </div>

            <div style={{ display: "flex", alignText: "center" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Previous:
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
                <h5>{this.state.getMyPrevious.map((child) => child)}</h5>
              </div>
            </div>
          </Container>
        </Card>
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
export default withStyles(styles)(TargetInvestor);
