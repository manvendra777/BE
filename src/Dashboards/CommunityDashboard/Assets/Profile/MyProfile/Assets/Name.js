import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import RoomIcon from "@material-ui/icons/Room";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import LinearProgress from '@material-ui/core/LinearProgress';

import rank1 from './Ranks/rank1.png'
import rank2 from './Ranks/rank2.png'
import rank3 from './Ranks/rank3.png'
import rank4 from './Ranks/rank4.png'
import rank5 from './Ranks/rank5.png'
import rank6 from './Ranks/rank6.png'

import gold1 from './Ranks/gold1.png'
import gold2 from './Ranks/gold2.png'
import gold3 from './Ranks/gold3.png'
import gold4 from './Ranks/gold4.png'
import gold5 from './Ranks/gold5.png'


const styles = (theme) => ({
  root: {},
  cont: {
    display: "flex",
    margin: "20px 0px 0px 5px ",
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

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      firstName: "",
      lastName: "",
      interests: "",
      age: 0,
      country: "",
      state: "",
      city: "",
      address: "",
      about_me: "",
      employmentCredentials: "",
      email: "",
      postal_code: "",
      image: null,
      isRanksOpen: false,
      points: 0,
      rank: '',
      rankImg: ''
    };

    this.mapDomain = this.mapDomain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.handleModal.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  componentWillMount() {
    this.getImage();
    this.getGamification()

  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(
        `http://50.19.216.143/management/community/photos/` + Cookies.get("id")
      )
      .then((res) => {
        mem = res.data;
        self.setState({ image: mem });
      });
  }
  showImage() {
    return <img src={`data:image/jpeg;base64,${this.state.image}`} />;
  }

  componentWillReceiveProps(props) {
    this.setState({
      firstName: props.data.firstName,
      lastName: props.data.lastName,
      interests: props.data.intrests,
      age: props.data.age,
      country: props.data.country,
      state: props.data.state,
      city: props.data.city,
      address: props.data.address,
      about_me: props.data.about_me,
      employmentCredentials: props.data.employmentCredentials,
      email: props.data.email,
      postal_code: props.data.postal_code,
    });
  }

  mapDomain() {
    if (this.props.data.domain != undefined) {
      console.log(this.props.data.domain.map((item, i) => item));
      return this.props.data.domain.map((item, i) => <Button>{item}</Button>);
    }
  }
  handleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      interests: this.state.interests,
      age: this.state.age,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      address: this.state.address,
      about_me: this.state.about_me,
      employmentCredentials: this.state.employmentCredentials,
      email: this.state.email,
      postal_code: this.state.postal_code,
    };

    console.log(data);

    axios
      .post(
        "http://50.19.216.143/management/community/profile/" + Cookies.get("id"),
        (data = data)
      )
      .then(function (response) {
        console.log(response.data);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  openRankingSystem = () => {
    this.setState({ isRanksOpen: !this.state.isRanksOpen })
  }

  addGamification = () => {
    axios
      .post(
        "http://50.19.216.143/management/community/profile/addGamification/" + Cookies.get("id"))
      .then(function (response) {
        console.log(response.data);
      });
  }


  getGamification = () => {
    var self = this;
    axios
      .get(
        "http://50.19.216.143/management/community/profile/getGamification/" + Cookies.get("id"))
      .then(function (response) {
        self.setState({ points: (response.data * 100) % 1000, rank: Math.floor(((response.data) * 100) / 1000) })
        switch (self.state.rank) {
          case 0:
            self.setState({ rankImg: rank1 })
            break;
          case 1:
            self.setState({ rankImg: rank2 })
            break;
          case 2:
            self.setState({ rankImg: rank3 })
            break;
          case 3:
            self.setState({ rankImg: rank4 })
            break;
          case 4:
            self.setState({ rankImg: rank5 })
            break;
          case 5:
            self.setState({ rankImg: rank6 })
            break;
          case 6:
            self.setState({ rankImg: gold1 })
            break;
          case 7:
            self.setState({ rankImg: gold2 })
            break;
          case 8:
            self.setState({ rankImg: gold3 })
            break;
          case 9:
            self.setState({ rankImg: gold4 })
            break;
          case 10:
            self.setState({ rankImg: gold5 })
            break;
          default:
            self.setState({ rankImg: gold5 })
            break;
        }

      });

  }

  render() {
    const { classes } = this.props;
    const r = this.state.rank

    const loginForm = (
      <div style={{ marginTop: 50 }}>
        <Card>
          <Container>
            <h1>Edit your Details</h1>

            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Firstname"
                defaultValue={this.state.firstName}
                name="firstName"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                label="Lastname"
                name="Lastname"
                defaultValue={this.state.lastName}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.interests}
                name="interests"
                type="number"
                label="Interests"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.about_me}
                name="about_me"
                label="Interests"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.age}
                name="age"
                type="number"
                label="Age"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.employmentCredentials}
                name="employmentCredentials"
                label="Employment Credentials"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.email}
                name="email"
                type="email"
                label="Email"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.address}
                label="Address"
                name="address"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.city}
                label="City"
                name="city"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.state}
                label="State"
                name="state"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.country}
                label="Country"
                name="country"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <Button color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Container>
        </Card>
      </div>
    );

    const checkDipp = () => {
      console.log(this.state.dipp_no.length > 3);
      if (this.state.dipp_no) {
        return <div>verified</div>;
      }
    };
    return (
      <div className={classes.root}>

        <div>
          <Card elevation={3} style={{ padding: 20 }}>
            <Container className={classes.cont}>
              <Grid md={3}>
                <Avatar
                  alt="Sanket"
                  src={`data:image/jpeg;base64,${this.state.image}`}
                  className={classes.large}
                />
              </Grid>
              <Grid>
                <Container className={classes.spc}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ color: "#1a237e" }}
                  >
                    {this.props.data.firstName + " " + this.props.data.lastName}
                  </Typography>
                  <Grid />
                </Container>
              </Grid>
            </Container>
          </Card>

          <Card elevation={3} style={{ marginTop: 10, marginBottom: 10, }}>
            <div>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginLeft: 10 }}>
                Next Rank Unlock in
                  </Typography>
              <div >
                <div style={{ display: 'flex', margin: 20 }}>
                  <div>
                    <LinearProgress variant="determinate" style={{ height: 10, borderRadius: 5, width: 700, marginTop: 16 }} value={this.state.points/10} />
                  </div>
                  <div onMouseEnter={this.openRankingSystem} style={{ marginLeft: 30 }}>

                    <Avatar style={{ width: 100 }} variant="square" src={this.state.rankImg}>
                    </Avatar>
                  </div>
                  <div style={{ marginLeft: 10, marginTop: 10 }}>
                    <Typography
                      variant="body2">
                      {this.state.points}/1000 Xp
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Dialog fullWidth={true}
            maxWidth={"md"} onClose={this.openRankingSystem} open={this.state.isRanksOpen}>
            <div style={{ display: 'flex', marginLeft: '12%', paddingTop: 50, paddingBottom: 20 }}>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank1} />
                <Typography
                  style={{ marginLeft: 15 }}
                  variant="body2">
                  Silver 1
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank2} />
                <Typography
                  style={{ marginLeft: 15 }}
                  variant="body2">
                  Silver 2
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank3} />
                <Typography
                  style={{ marginLeft: 15 }}
                  variant="body2">
                  Silver 3
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank4} />
                <Typography
                  style={{ marginLeft: 15 }}
                  variant="body2">
                  Silver 4
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank5} />
                <Typography
                  style={{ marginLeft: 25 }}
                  variant="body2">
                  Silver 5
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={rank6} />
                <Typography
                  style={{ marginLeft: 25, marginTop: 8 }}
                  variant="body2">
                  Silver 6
                    </Typography>
              </div>
            </div>


            <div style={{ display: 'flex', marginLeft: '24%', paddingBottom: 20 }}>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={gold1} />
                <Typography
                  style={{ marginLeft: 27, marginTop: 8 }}
                  variant="body2">
                  Gold 1
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={gold2} />
                <Typography
                  style={{ marginLeft: 25, marginTop: 8 }}
                  variant="body2">
                  Gold 2
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={gold3} />
                <Typography
                  style={{ marginLeft: 25, marginTop: 8 }}
                  variant="body2">
                  Gold 3
                    </Typography>
              </div>
              <div style={{ padding: 10 }}>
                <Avatar style={{ width: 100 }} variant="square" src={gold4} />
                <Typography
                  style={{ marginLeft: 25, marginTop: 8 }}
                  variant="body2">
                  Gold 4
                    </Typography>
              </div>
            </div>
            <div style={{ padding: 10, marginLeft: '42.5%', marginBottom: 20 }}>
              <Avatar style={{ width: 100 }} variant="square" src={gold5} />
              <Typography
                style={{ marginLeft: 26, marginTop: 8 }}
                variant="body2">
                Master
                    </Typography>
            </div>
          </Dialog>


          <Card
            className={classes.root}
            md={6}
            variant="outlined"
            style={{ marginTop: 20 }}
          >
            <div style={{ marginTop: 1, marginLeft: 600 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.toggleModal}
              >
                Edit
              </Button>
            </div>
            <Dialog open={this.state.isModalOpen} onClose={this.toggleModal}>
              {loginForm}
            </Dialog>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#1a237e", fontSize: 10 }}>Interests</h6>
                  </TableCell>
                  <TableCell>{this.props.data.interests}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#1a237e", fontSize: 10 }}>About Me</h6>
                  </TableCell>
                  <TableCell>{this.props.data.about_me}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#1a237e", fontSize: 10 }}>Employment Credentials</h6>
                  </TableCell>
                  <TableCell>{this.props.data.employmentCredentials}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#1a237e", fontSize: 10 }}>Age</h6>
                  </TableCell>
                  <TableCell>{this.props.data.age}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#1a237e", fontSize: 10 }}>Address</h6>
                  </TableCell>
                  <TableCell>
                    {this.props.data.address +
                      ", " +
                      this.props.data.city +
                      ", " +
                      this.props.data.state +
                      "," +
                      this.props.data.postal_code +
                      ", " +
                      this.props.data.country}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>


        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Name);
