import React from 'react';
import { Link, Route } from 'react-router-dom';
import './RegistrationPg.css';
import { Button, Container, Card, Form, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import CardM from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ButtonM from '@material-ui/core/Button';

class RegistrationPg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            errors: {},
            estateM: false,
            estateP: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            console.log(this.state);

            var data = {
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email
            }

            console.log(data);

            axios.post('http://localhost:8085/security/addUser', data = data)
                .then(function (response) {

                    console.log(response.data);
                    window.location = "/profileFrontPg" //This line of code will redirect you once the submission is succeed
                })
            if (this.resetForm) {
                console.log("true");
            }
        }
    }
    validateForm() {

        let errors = {};
        this.setState({ estateM: false, estateP: false })
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
            <div>
                <Row style={{ background: "#FFFF99" }}>
                    <Col >
                        <Image style={{ width: 500, height: 600, marginTop: 0 }} src="assets/registration.png" />
                    </Col>
                    <Col >
                        <CardM style={{ width: 500, marginTop: 120 }} elevation={10}>

                            <Container>

                                <Form className="RegistrationPg" method="post" onSubmit={this.handleSubmit} style={{ marginBottom: 40, marginTop: 20, marginLeft: 20 }}>
                                    <Typography variant="h4" gutterBottom style={{ color: "#2F4F4F", fontWeight: "bold" }}>
                                        Register
                                    </Typography>
                                    <div >
                                        <div>
                                            <TextField type="username" style={{ marginBottom: 20, width: "60%" }} id="standard-basic" label="Enter username" onChange={(event) => { this.setState({ username: event.target.value }) }} />
                                        </div>
                                        <div>
                                            <TextField error={this.state.estateM} style={{ marginBottom: 20, width: "60%" }} helperText={this.state.errors.email} id="standard-basic" label="Enter your Email" onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                        </div>
                                        <div>
                                            <TextField type="password" error={this.state.estateP} style={{ marginBottom: 20, width: "60%" }} helperText={this.state.errors.password} id="standard-basic" label="Enter password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                        </div>
                                    </div>

                                    <ButtonM type="submit" variant="contained" color="primary" style={{ marginTop: 20, background: "#2196f3" }}>
                                        Sign up
                                    </ButtonM>
                                    <div style={{ display: "flex", marginTop: 20 }}>
                                        <Typography variant="subtitle1" gutterBottom>Already have an account?</Typography>
                                        <Link to="./loginPg">
                                            <Typography style={{ marginLeft: 10 }} variant="subtitle1" gutterBottom>Sign in</Typography>
                                        </Link>
                                    </div>
                                </Form>
                            </Container>

                        </CardM>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default RegistrationPg;