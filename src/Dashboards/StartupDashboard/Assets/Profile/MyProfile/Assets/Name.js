import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import Cookies from 'js-cookie'
import { Checkmark } from 'react-checkmark'
import Edit from './Edit'

const styles = theme => ({
    root: {

    },
    cont: {
        display: "flex",
        margin: "20px 0px 0px 5px ",
        alignItems: "center",
        marginBotton: 200,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    spc: {
        display: "",
        alignText: "center"
    }
});


class Name extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            qualification: "",
            phone_no: "",
            userID: "",
            domain: "",
            dipp_no: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
            startupName: "",
            startupDescription: "",
            websiteURL: "",
            profession: "",
            image: null,
            showVe: false
        };

        this.mapDomain = this.mapDomain.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.handleModal.bind(this);
        this.getImage = this.getImage.bind(this);

    }
    componentWillMount() {
        this.getImage()
    }
    getImage() {
        var self = this;
        var mem;
        axios.get(`http://54.237.17.61/management/startup/photos/` + Cookies.get('id'))
            .then(res => {
                mem = res.data;
                self.setState({ image: mem })
            })
    }
    showImage() {
        return (<img src={`data:image/jpeg;base64,${this.state.image}`} />)
    }

    componentWillReceiveProps(props) {
        this.setState({
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            age: props.data.age,
            email: props.data.email,
            qualification: props.data.qualification,
            phone_no: props.data.phone_no,
            userID: props.data.userID,
            domain: props.data.domain,
            dipp_no: props.data.dipp_no,
            address: props.data.address,
            city: props.data.city,
            country: props.data.country,
            postalCode: props.data.postalCode,
            startupName: props.data.startupName,
            startupDescription: props.data.startupDescription,
            websiteURL: props.data.websiteURL,
            profession: props.data.profession
        });
        if (props.data.dipp_no) {
            if (props.data.dipp_no) {
                this.setState({ showVe: true })
            }

        }
    }

    mapDomain() {
        if (this.props.data.domain != undefined) {
            console.log(this.props.data.domain.map((item, i) => (item)));
            return this.props.data.domain.map((item, i) => (<Button>{item}</Button>))
        }

    }
    handleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            email: this.state.email,
            qualification: this.state.qualification,
            phone_no: this.state.phone_no,
            userID: this.state.userID,
            domain: this.state.domain,
            dipp_no: this.state.dipp_no,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            postalCode: this.state.postalCode,
            startupName: this.state.startupName,
            startupDescription: this.state.startupDescription,
            websiteURL: this.state.websiteURL,
            profession: this.state.profession
        }

        console.log(data);

        axios.post('http://54.237.17.61/management/startup/profile/' + Cookies.get('id'), data = data)
            .then(function (response) {
                console.log(response.data);
            })
        window.location.reload()
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    showDomain = () => {
        if (typeof this.props.data.domain !== 'undefined') {
            return (this.props.data.domain.map((item, i) => (<Chip color="primary" style={{ marginLeft: 7 }} label={item} />)))
        }
    }
    render() {
        const { classes } = this.props;
        const loginForm = (
            <div >
                <Card >
                    <Typography variant="h5" color="primary" style={{ padding: '2%' }}>
                        Edit your Details
                    </Typography>
                    <Divider />
                    <div style={{ padding: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                style={{ margin: 5 }}
                                label="Firstname"
                                defaultValue={this.state.firstName}
                                name="firstName"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                label="Lastname"
                                name="lastName"
                                defaultValue={this.state.lastName}
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.age}
                                name="age"
                                type="number"
                                label="Age"
                                onChange={this.handleChange.bind(this)}

                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.email}
                                type="email"
                                label="Email"
                                name="email"
                                onChange={this.handleChange.bind(this)}

                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.qualification}
                                label="Qualification"
                                name="qualification"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.phone_no}
                                type="number"
                                label="Phone No."
                                name="phone_no"
                                onChange={this.handleChange.bind(this)}
                            />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.profession}
                                label="Profession"
                                name="profession"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.startupName}
                                label="Company Name"
                                name="startupName"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.startupDescription}
                                label="Desciption"
                                name="startupDescription"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.websiteURL}
                                label="URL"
                                name="websiteURL"
                                onChange={this.handleChange.bind(this)}
                            />   <br />

                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.dipp_no}
                                label="Dipp No."
                                name="dipp_no"
                                onChange={this.handleChange.bind(this)}
                            />   <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.address}
                                label="Address"
                                name="address"
                                onChange={this.handleChange.bind(this)}
                            />   <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.city}
                                label="City"
                                name="city"
                                onChange={this.handleChange.bind(this)}
                            />   <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.country}
                                label="Country"
                                name="country"
                                onChange={this.handleChange.bind(this)}
                            />   <br />
                            <TextField
                                style={{ margin: 5 }}
                                defaultValue={this.state.postalCode}
                                label="Postal Code"
                                name="postalCode"
                                onChange={this.handleChange.bind(this)}
                            /><br />
                            <Button color="primary" type="submit">Submit</Button>
                        </form>
                    </div>
                </Card>

            </div>
        );
        return (
            <div className={classes.root}>
                <Card elevation={3} style={{ display: 'flex', padding: '1%' }}>
                    <div>
                        <Avatar variant="square" alt={this.props.data.startupName} src={`data:image/jpeg;base64,${this.state.image}`} className={classes.large} />
                    </div>
                    <div style={{ marginLeft: '3%' }}>
                        <Typography variant="h4" style={{ color: "#455a64" }} >
                            <div style={{ display: 'flex' }}> {this.props.data.startupName}{this.state.showVe ? <div>{<div style={{ width: 80, marginLeft: 10, marginTop: 'auto', marginBottom: 'auto' }}>
                                <div style={{ color: '#424242', display: 'flex' }}>
                                    <div><Checkmark size={19} color='#00b0ff' /></div>
                                </div>
                            </div>}</div> : <div></div>}</div>
                        </Typography>

                        <Typography variant="h5" color="primary">
                            <div style={{ margin: '1%' }}>  {' ' + this.props.data.firstName + ' ' + this.props.data.lastName}</div>

                        </Typography>

                        <div style={{ marginLeft: '1%' }}>
                            <Typography>
                                <RoomIcon color="primary" />
                                {" " + this.props.data.city}, {this.props.data.country}
                            </Typography>
                        </div>
                        <div style={{ margin: 10 }}>
                            {this.showDomain()}
                        </div>
                    </div>
                    <Edit edit={this.toggleModal} />
                </Card>

                <Card elevation={3} style={{ marginTop: 20, width: '100%' }}>
                    <div style={{ marginTop: 1, marginLeft: 600 }}>

                    </div>
                    <Dialog
                        open={this.state.isModalOpen}
                        onClose={this.toggleModal}>
                        {loginForm}
                    </Dialog>

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Description</h5></TableCell>
                                <TableCell>{this.props.data.startupDescription}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>  Website:</h5></TableCell>
                                <TableCell> {this.props.data.websiteURL}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Dipp No.</h5></TableCell>
                                <TableCell>{this.props.data.dipp_no}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Profession</h5></TableCell>
                                <TableCell>{this.props.data.profession}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Qualification</h5></TableCell>
                                <TableCell>{this.props.data.qualification}</TableCell>
                            </TableRow>

                        </TableBody>

                        <TableBody>
                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Email</h5></TableCell>
                                <TableCell>{this.props.data.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Phone</h5></TableCell>
                                <TableCell>{this.props.data.phone_no}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Age</h5></TableCell>
                                <TableCell>{this.props.data.age}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><h5 style={{ color: "#5c6bc0" }}>Address</h5></TableCell>
                                <TableCell>{this.props.data.address + ', ' + this.props.data.city + ', ' + this.props.data.postalCode + ', ' + this.props.data.country}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card >
            </div >
        );
    }
}
export default withStyles(styles)(Name);