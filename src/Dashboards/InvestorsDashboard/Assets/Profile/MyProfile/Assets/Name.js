import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
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
const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
  },
  cont: {
    display: "flex",
    margin: "20px 0px 0px 5px ",
    alignItems: "center",
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
      firstName: "",
      lastName: "",
      phone_no: "",
      email: "",
      age: "",
      investingCapacity: null,
      about: "",
      investments: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: 0,
      userID: "",
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.handleModal.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({
      firstName: props.data.firstName,
      lastName: props.data.lastName,
      age: props.data.age,
      email: props.data.email,
      phone_no: props.data.phone_no,
      userID: props.data.userID,
      investingCapacity: props.data.investingCapacity,
      about: props.data.about,
      investments: props.data.investments,
      address: props.data.address,
      city: props.data.city,
      state: props.data.state,
      country: props.data.country,
      postal_code: props.data.postal_code,
    });
  }
  componentWillMount() {
    this.getImage();
  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(
        `http://54.237.17.61/management/investor/photos/` + Cookies.get("id")
      )
      .then((res) => {
        mem = res.data;
        self.setState({ image: mem });
      });
  }
  showImage() {
    return <img src={`data:image/jpeg;base64,${this.state.image}`} />;
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
      age: this.state.age,
      email: this.state.email,
      phone_no: this.state.phone_no,
      userID: this.state.userID,
      investingCapacity: this.state.investingCapacity,
      about: this.state.about,
      investments: this.state.investments,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      postal_code: this.state.postal_code,
    };

    console.log(data);

    axios
      .post(
        "http://54.237.17.61/management/investor/profile/" + Cookies.get("id"),
        (data = data)
      )
      .then(function (response) {
        console.log(response.data);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
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
                defaultValue={this.state.age}
                name="age"
                type="number"
                label="Age"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.email}
                type="email"
                label="Email"
                name="email"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.about}
                label="About Yourself"
                name="about"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.investments}
                label="Previous Investments"
                name="investments"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <TextField
                defaultValue={this.state.phone_no}
                type="number"
                label="Phone No."
                name="phone_no"
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
    return (
      <div>
        <Card elevation={3}>
          <Container>
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
                </Container>
              </Grid>
            </Container>
            <Divider style={{ marginTop: 20 }} />

            <Card
              md={6}
              variant="outlined"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <Container>
                <div style={{ marginTop: 5, marginLeft: 600 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.toggleModal}
                  >
                    Edit
                  </Button>
                </div>
                <Dialog
                  open={this.state.isModalOpen}
                  onClose={this.toggleModal}
                >
                  {loginForm}
                </Dialog>

                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>Email</h6>
                      </TableCell>
                      <TableCell>{this.props.data.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>About Yourself</h6>
                      </TableCell>
                      <TableCell>{this.props.data.about}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>
                          Previous Investments
                        </h6>
                      </TableCell>
                      <TableCell>{this.props.data.investments}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>Phone</h6>
                      </TableCell>
                      <TableCell>{this.props.data.phone_no}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>Age</h6>
                      </TableCell>
                      <TableCell>{this.props.data.age}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <h6 style={{ color: "#1a237e" }}>Address</h6>
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
              </Container>
            </Card>
          </Container>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Name);
