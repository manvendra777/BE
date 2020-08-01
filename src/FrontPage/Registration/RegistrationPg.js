
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './RegistrationPg.css';
import { Button, Container, Card, Form, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import CardM from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ButtonM from '@material-ui/core/Button';
import Cookies from 'js-cookie'
import { Spring } from 'react-spring/renderprops';
import { trackPromise } from 'react-promise-tracker';
import registerPhoto from '../../Photo/register.gif'
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
class RegistrationPg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            type: "",
            errors: {},
            estateM: false,
            estateP: false,
            exists: false,
            helperUsername: '',
            showPass: false,
            isReferral: false,
            referral:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time)
        )
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            var data = {
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email,
                "type": this.state.type
            }
            var self = this;
            trackPromise(
                this.sleep(2000).then(() => {
                    axios.post('http://50.19.216.143/security/addUser', data = data)
                        .then(function (response) {
                            if (response.data == "exists") {
                                self.setState({ helperUsername: 'username already exists' })
                                self.setState({ exists: true })
                            } else {
                                Cookies.set('temp', data.username);
                                axios.post('http://50.19.216.143/security/getId', data = data)
                                    .then(function (response) {
                                        Cookies.set('tempId', response.data)
                                        window.location = "/register"
                                    })
                            }
                        })
                })
            )
            if (this.resetForm) {
                console.log("true");
            }
        }
    }
    validateForm() {
        let errors = {};
        this.setState({ estateM: false, estateP: false, exists: false })
        let formIsValid = true;
        if (!this.state.email) {
            this.setState({ estateM: true })
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
        if (typeof this.state.email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                this.setState({ estateM: true })
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }
        if (!this.state.password) {
            this.setState({ estateP: true })
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                this.setState({ estateP: true })
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <div style={{ padding: '4%', backgroundColor: '#e0e0e0', height: '100%' }}>
                <Spring
                    from={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                    to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                    config={{ delay: 500 }}>
                    {props => <div style={props}>
                        <CardM elevation={10} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', width: '92%' }}>
                                <div style={{ width: '70%', marginLeft: '5%' }}>
                                    <Image style={{ marginTop: '1%', marginLeft: '0%', width: '100%' }} src={registerPhoto} />
                                </div>
                                <div style={{ width: '30%', marginTop: '15%' }}>
                                    <div>
                                        {/*
                                        <div>
                                            <Typography style={{ color: '#1c4083' }} variant="h3">
                                                Create an account
                                            </Typography>
                                        </div>
                                            <Typography style={{ color: '#37474f' }} variant="h5">
                                            To keep connected with us please login with your personal information by username and password
                                        </Typography> */}
                                    </div>
                                    <div style={{ marginTop: 0, position: 'relative', width: '80%' }} elevation={10}>

                                        <Container>
                                            <Form className="RegistrationPg" method="post" onSubmit={this.handleSubmit} style={{ marginBottom: 40, marginTop: 20, marginLeft: 20 }}>
                                                <Typography variant="h4" gutterBottom style={{ color: "#2F4F4F", fontWeight: "bold", }}>
                                                    Register
                                                </Typography>
                                                <div style={{ marginTop: 30 }}>
                                                    <div>
                                                        <TextField variant="outlined" type="username" helperText={this.state.helperUsername} error={this.state.exists} style={{ marginBottom: 20, width: "100%" }} id="standard-basic" label="Enter username" onChange={(event) => { this.setState({ username: event.target.value }) }} />
                                                    </div>
                                                    <div>
                                                        <TextField variant="outlined" error={this.state.estateM} style={{ marginBottom: 20, width: "100%" }} helperText={this.state.errors.email} id="standard-basic" label="Enter your Email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                                    </div>
                                                    <div>
                                                        <TextField variant="outlined" type={this.state.showPass ? 'text' : 'password'} error={this.state.estateP} style={{ marginBottom: 20, width: "100%" }} helperText={this.state.errors.password} id="standard-basic" label="Enter password" onChange={(event) => { this.setState({ password: event.target.value }) }}
                                                            InputProps={{
                                                                endAdornment:
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            onClick={() => { this.setState({ showPass: !this.state.showPass }) }}
                                                                            aria-label="toggle password visibility"
                                                                            edge="end">
                                                                            {this.state.showPass ? <Visibility /> : <VisibilityOff />}

                                                                        </IconButton>
                                                                    </InputAdornment>
                                                            }} />
                                                    </div>
                                                    
                                                    <div>
                                                        <Checkbox
                                                            color="primary" checked={this.state.isReferral} onChange={() => this.setState({ isReferral: !this.state.isReferral })} />
                                                        Have a referral code?
                                                        {this.state.isReferral ?  <div> <TextField variant="outlined" style={{ marginBottom: 20, width: "100%" }}  id="standard-basic" onChange={(event) => { this.setState({ referral: event.target.value }) }} /></div> : <div></div>}
                                                    </div>

                                                </div>
                                                <ButtonM type="submit" variant="contained" color="primary" style={{ marginTop: 20, background: "#2196f3" }}>
                                                    Sign up
                                                </ButtonM>
                                                <div style={{ display: "flex", marginTop: 20 }}>
                                                    <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>Already have an account?</Typography>
                                                    <Link to="./loginPg">
                                                        <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>Sign in</Typography>
                                                    </Link>
                                                </div>
                                            </Form>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </CardM>
                    </div>}
                </Spring>
            </div>
        );
    }
}
export default RegistrationPg;