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
import Chip from "@material-ui/core/Chip";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1, 1, 1, 1),
      padding: theme.spacing(4, 4, 4, 4),
      width: theme.spacing(100),
    },
  },
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
      email: "",
      qualification: "",
      phone_no: "",
      userID: "",
      domain: "",
      address: "",
      city: "",
      country: "",
      experience_in_domain: "",
      incentive: "",
      aboutWork: "",
      state: "",
      postalCode: "",
      age: "",
      about_yourself: "",
      image: null,
    };

    this.mapDomain = this.mapDomain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.handleModal.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  componentWillMount() {
    this.getImage();
  }
  getImage() {
    var self = this;
    var mem;
    axios
      .get(`http://50.19.216.143/management/mentor/photos/` + Cookies.get("id"))
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
      email: props.data.email,
      qualification: props.data.qualification,
      phone_no: props.data.phone_no,
      userID: props.data.userID,
      aboutWork: props.data.aboutWork,
      state: props.data.state,
      age: props.data.age,
      postalCode: props.data.postalCode,
      domain: props.data.domain,
      incentive: props.data.incentive,
      address: props.data.address,
      city: props.data.city,
      country: props.data.country,
      experience_in_domain: props.data.experience_in_domain,
      about_yourself: props.data.about_yourself,
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
      email: this.state.email,
      qualification: this.state.qualification,
      phone_no: this.state.phone_no,
      aboutWork: this.state.aboutWork,
      userID: this.state.userID,
      domain: this.state.domain,
      incentive: this.state.incentive,
      address: this.state.address,
      age: this.state.age,
      postalCode: this.state.postalCode,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      experience_in_domain: this.state.experience_in_domain,
      about_yourself: this.state.about_yourself,
    };

    console.log(data);

    axios
      .post(
        "http://50.19.216.143/management/mentor/profile/" + Cookies.get("id"),
        (data = data)
      )
      .then(function (response) {
        console.log(response.data);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  showDomain = () => {
    if (typeof this.props.data.domain !== "undefined") {
      return this.props.data.domain.map((item, i) => (
        <Chip color="primary" style={{ marginLeft: 7 }} label={item} />
      ));
    }
  };

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
                label="LastName"
                name="lastName"
                defaultValue={this.state.lastName}
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
                defaultValue={this.state.qualification}
                label="Qualification"
                name="qualification"
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
              <TextField
                defaultValue={this.state.postalCode}
                type="number"
                label="Postal Code"
                name="postalCode"
                onChange={this.handleChange.bind(this)}
              />
              <TextField
                defaultValue={this.state.domain}
                label="Domain"
                name="domain"
                onChange={this.handleChange.bind(this)}
              />{" "}
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
              <TextField
                defaultValue={this.state.incentive}
                label="Incentive"
                name="incentive"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.experience_in_domain}
                label="Experience in Domain"
                name="experience_in_domain"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.aboutWork}
                label="About Work"
                name="aboutWork"
                onChange={this.handleChange.bind(this)}
              />{" "}
              <br />
              <TextField
                defaultValue={this.state.about_yourself}
                label="About Yourself"
                name="about_yourself"
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
      <div className={classes.root}>
        <Card elevation={3}>
          <Container className={classes.cont}>
            <Grid md={3}>
              <Avatar
                alt={this.props.data.firstName}
                src={`data:image/jpeg;base64,${this.state.image}`}
                className={classes.large}
              />
            </Grid>
            <Grid>
              <Container className={classes.spc}>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "#607d8b" }}
                >
                  {this.props.data.firstName + " " + this.props.data.lastName}
                </Typography>
                <Grid>
                  <Typography>
                    <RoomIcon color="primary" />
                    {this.props.data.city +
                      ", " +
                      this.props.data.state +
                      "," +
                      this.props.data.country}
                  </Typography>
                  <div style={{ margin: 10 }}>{this.showDomain()}</div>
                </Grid>
              </Container>
            </Grid>
          </Container>
          <Divider style={{ marginTop: 20 }} />

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
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>About Yourself</h6>
                  </TableCell>
                  <TableCell>{this.props.data.about_yourself}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>Experience in Domain</h6>
                  </TableCell>
                  <TableCell>{this.props.data.experience_in_domain}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>
                      About your Previous Work
                    </h6>
                  </TableCell>
                  <TableCell>{this.props.data.aboutWork}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>Qualification</h6>
                  </TableCell>
                  <TableCell>{this.props.data.qualification}</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>Email</h6>
                  </TableCell>
                  <TableCell>{this.props.data.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>Phone</h6>
                  </TableCell>
                  <TableCell>{this.props.data.phone_no}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <h6 style={{ color: "#607d8b", fontSize: 18 }}>Address</h6>
                  </TableCell>
                  <TableCell>
                    {this.props.data.address +
                      ", " +
                      this.props.data.city +
                      ", " +
                      this.props.data.state +
                      "," +
                      this.props.data.postalCode +
                      ", " +
                      this.props.data.country}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(Name);
