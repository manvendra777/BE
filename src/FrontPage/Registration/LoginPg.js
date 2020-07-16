import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Form, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios'
import CardM from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ButtonM from '@material-ui/core/Button';

class LoginPg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      errors: {},
      estateM: false,
      stat: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }


  validateForm() {
    let errors = {};
    this.setState({ estateM: false })
    let formIsValid = true;
    if ((!this.state.username || !this.state.password)) {
      this.setState({ estateM: true })
      formIsValid = false;
      errors["username"] = "*Incorrect username or password.";
    } else if (this.state.username.length < 3 || this.state.password.length < 3) {
      this.setState({ estateM: true })
      formIsValid = false;
      errors["username"] = "*Incorrect username or password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  onError = (event) => {
    let formIsValid = true;
    let errors = {};
    this.setState({ estateM: true })
    errors["username"] = "*Incorrect username or password.";
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  //when the form is submitted then checks valid or not
  handleSubmit = e => {
    e.preventDefault();
    var data = {
      username: this.state.username,
      password: this.state.password
    }
    var self = this;
    if (this.validateForm()) {
      axios.post('http://localhost:8085/security/login', data = data)
        .then(function (response) {
          if (response.data) {
            //window.location = "/login" //This line of code will redirect you once the submission is succeed
            console.log("here you go !");
            window.location = "/CommunityDashboard/Home"
          } else {
            self.onError();
          }
        })
    }
  };


  render() {
    return (
      <div>
        <Row style={{ background: "#90caf9" }}>
          <Col >
            <Image style={{ width: 500, height: 600 }} src="assets/login.png" />        </Col>
          <Col>
            <CardM style={{ width: 400, marginTop: 150, marginRight: 100 }} elevation={10}>
              <Container>
                <Form onSubmit={this.handleSubmit} method="post" style={{ marginBottom: 40, marginTop: 20, marginLeft: 20 }} >
                  <Typography variant="h4" gutterBottom style={{ color: "#2F4F4F", fontWeight: "bold" }}>
                    Sign In
        </Typography>
                  <div >
                    <div>
                      <TextField error={this.state.estateM} type="text" name="username" style={{ marginBottom: 20, width: "90%" }} id="standard-basic" label="Enter your username" onChange={(event) => { this.setState({ username: event.target.value }) }} />
                    </div>
                    <div>
                      <TextField error={this.state.estateM} helperText={this.state.errors.username} type="password" name="password" style={{ marginBottom: 20, width: "90%" }} id="standard-basic" label="Enter your password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    </div>
                  </div>
                  <div className="Login" style={{ marginBottom: 20 }}>
                    <ButtonM type="submit" variant="contained" color="primary" style={{ marginTop: 20, background: "#2196f3" }}>
                      Login
              </ButtonM>
                    <Link to="/registrationPg">
                      <Typography style={{ marginTop: 20 }} variant="subtitle1" gutterBottom>Create your Account</Typography>
                    </Link>
                  </div>
                </Form>
              </Container>
            </CardM>

          </Col>
        </Row>
      </div>

    )
  }

}

export default LoginPg;
