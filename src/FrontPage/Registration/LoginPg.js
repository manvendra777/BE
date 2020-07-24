import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Card, Form, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios'
import CardM from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ButtonM from '@material-ui/core/Button';
import Cookies from 'js-cookie';
import { Spring } from 'react-spring/renderprops';
import {trackPromise} from 'react-promise-tracker';
import loginPhoto from '../../Photo/clock_trans.gif'

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
    this.sleep = this.sleep.bind(this);
  }

  sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
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
  onErrorNetwork = (event) => {
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
      trackPromise(
        this.sleep(4000).then(()=>{
      axios.post('http://54.237.17.61/security/login', data = data)   //Login
        .then(function (response) {
          if (response.data) {

            axios.post('http://54.237.17.61/security/getId', data = data) //Gets the session ID from database
              .then(function (response) {
                var id = response.data
                axios.get('http://54.237.17.61/security/getType?userName=' + self.state.username)  //Gets the type of user from database.
                  .then(function (response) {
                    var destination = response.data;  //store the type of user in variable
                    //console.log(response.data);
                    switch (destination) {
                      case "S":
                        Cookies.set('id', id, { expires: 7 })
                        Cookies.set('isLoggedIn', true, { expires: 7 })
                        Cookies.set('type', destination)
                        window.location = "/StartupDashboard/Home";
                        break;
                      case "M":
                        Cookies.set('id', id, { expires: 7 })
                        Cookies.set('isLoggedIn', true, { expires: 7 })
                        Cookies.set('type', destination)
                        window.location = "/MentorDashboard/Home"
                        break;
                      case "I":
                        Cookies.set('id', id, { expires: 7 })
                        Cookies.set('isLoggedIn', true, { expires: 7 })
                        Cookies.set('type', destination)
                        window.location = "/InvestorDashboard/Home"
                        break;
                      case "C":
                        Cookies.set('id', id, { expires: 7 })
                        Cookies.set('isLoggedIn', true, { expires: 7 })
                        Cookies.set('type', destination)
                        Cookies.set('username', self.state.username)
                        if (typeof Cookies.get('ad') == 'undefined') {
                          Cookies.set('ad', 'Other')
                        }
                        window.location = "/CommunityDashboard/Home"
                        break;
                      default:
                        Cookies.set('temp', self.state.username)
                        Cookies.set('tempId', id)
                        window.location = "/register"
                    }
                  })

              })

          } else {
            self.onError();
          }
        }).catch(function (error) { self.onError() })
      })
      )
    }
  };


  render() {
    return (
      <div style={{ padding: '5%', backgroundColor: '#e0e0e0', height: '100%' }}>

        <Spring
          from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ delay: 500 }}>
          {props => <div style={props}>


            <CardM elevation={5} style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', width: '92%' }}>
                <div style={{ width: '70%', marginLeft: '5%' }}>
                  <Image style={{ marginTop: '1%', marginLeft: '0%', width: '100%' }} src={loginPhoto} />
                </div>

                <div style={{ width: '30%', marginTop: '10%' }}>




                  <div>
                    <div>
                      <Typography style={{ color: '#1c4083' }} variant="h3">
                        Welcome Back :)
                 </Typography>
                    </div>
                    <Typography style={{ color: '#37474f' }} variant="h5">
                      To keep connected with us please login with your personal information by username and password
                 </Typography>
                  </div>
                  <div style={{ marginTop: 20, width: 500, height: 400, position: 'relative' }} elevation={10}>
                    <Container style={{ marginTop: 'auto', marginBottom: 'auto', position: 'absolute', top: '7%', }}>
                      <Form onSubmit={this.handleSubmit} method="post" style={{ marginBottom: 40, marginTop: 20, marginLeft: 20 }} >

                        <Typography variant="h4" gutterBottom style={{ color: "#2F4F4F", fontWeight: "bold" }}>
                          Sign In
                      </Typography>

                        <div >
                          <div>
                            <TextField error={this.state.estateM} type="text" name="username" style={{ marginBottom: 20, width: "100%" }} id="standard-basic" label="Enter your username" onChange={(event) => { this.setState({ username: event.target.value }) }} />
                          </div>
                          <div>
                            <TextField error={this.state.estateM} helperText={this.state.errors.username} type="password" name="password" style={{ marginBottom: 20, width: "100%" }} id="standard-basic" label="Enter your password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
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
                  </div>

                </div>
              </div>
            </CardM>
          </div>
          }
        </Spring>
      </div>
    )
  }

}

export default LoginPg;
