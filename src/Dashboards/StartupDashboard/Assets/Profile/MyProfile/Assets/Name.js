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

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1, 1, 1, 1),
			padding: theme.spacing(4, 4, 4, 4),
			width: theme.spacing(100),
		}
	},
	cont: {
		display: "flex",
		margin: "20px 0px 0px 5px ",
		alignItems: "center",
		marginBotton: 200
	},
	large: {
		width: theme.spacing(15),
		height: theme.spacing(15)
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
			profession: ""
		};

		this.mapDomain = this.mapDomain.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.handleModal.bind(this);
	
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

		axios.post('http://localhost:8082/startup/profile/5f06cef3c99ce30f9aa4d169', data = data)
			.then(function (response) {
				console.log(response.data);
			})

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
								defaultValue={this.state.profession}
								label="Profession"
								name="profession"
								onChange={this.handleChange.bind(this)}
							/>
							<br />
							<TextField
								defaultValue={this.state.startupName}
								label="Company Name"
								name="startupName"
								onChange={this.handleChange.bind(this)}
							/>
							<br />
							<TextField
								defaultValue={this.state.startupDescription}
								label="Desciption"
								name="startupDescription"
								onChange={this.handleChange.bind(this)}
							/>
							<br />
							<TextField
								defaultValue={this.state.websiteURL}
								type="url"
								label="URL"
								name="websiteURL"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.domain}
								label="Domain"
								name="domain"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.dipp_no}
								label="Dipp No."
								name="dipp_no"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.address}
								label="Address"
								name="address"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.city}
								label="City"
								name="city"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.country}
								label="Country"
								startupName="country"
								onChange={this.handleChange.bind(this)}
							/>   <br />
							<TextField
								defaultValue={this.state.postalCode}
								label="Postal Code"
								name="postalCode"
								onChange={this.handleChange.bind(this)}
							/><br />
							<Button color="primary" type="submit">Submit</Button>
						</form>

					</Container>
				</Card>

			</div>
		);

		const checkDipp = () =>{
			console.log(this.state.dipp_no.length>3);
			if(this.state.dipp_no){
				return(<div>verified</div>)
			}
		}
		return (
			<div className={classes.root}>
				<Card elevation={3}>
					<Container className={classes.cont}>
						<Grid md={3}>
							<Avatar alt="Sanket" className={classes.large} /></Grid>
						<Grid>
							<Container className={classes.spc}>
								<Typography variant="h4" gutterBottom style={{ color: "#1a237e" }}>
									{this.props.data.firstName + ' ' + this.props.data.lastName}
								</Typography>
								<Grid><Typography variant="h5" gutterBottom>
									{this.props.data.startupName} </Typography>
									<div>
									{checkDipp()}</div>
									
							<Typography><RoomIcon color="primary" />{this.props.data.city}</Typography>
									<Typography variant="h7" gutterBottom >
										Website: <a style={{ color: "#01579b" }}>{this.props.data.websiteURL}</a>
									</Typography>
								</Grid>
							</Container></Grid>
					</Container>
					<Divider style={{ marginTop: 20 }} />



					<Card className={classes.root} md={6} variant="outlined" style={{ marginTop: 20 }}>

						<div style={{ marginTop: 1, marginLeft: 600 }}>
							<Button variant="outlined" color="primary" onClick={this.toggleModal}>
								Edit</Button></div><Dialog
							open={this.state.isModalOpen}
							onClose={this.toggleModal}
						>{loginForm}</Dialog>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Description</h6></TableCell>
									<TableCell>{this.props.data.startupDescription}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Dipp No.</h6></TableCell>
									<TableCell>{this.props.data.dipp_no}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Profession</h6></TableCell>
									<TableCell>{this.props.data.profession}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Qualification</h6></TableCell>
									<TableCell>{this.props.data.qualification}</TableCell>
								</TableRow>
							</TableBody>
							<TableBody>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Email</h6></TableCell>
									<TableCell>{this.props.data.email}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Phone</h6></TableCell>
									<TableCell>{this.props.data.phone_no}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Age</h6></TableCell>
									<TableCell>{this.props.data.age}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell><h6 style={{ color: "#1a237e" }}>Address</h6></TableCell>
									<TableCell>{this.props.data.address + ', ' + this.props.data.city + ', ' + this.props.data.postalCode + ', ' + this.props.data.country}</TableCell>
								</TableRow>
							</TableBody></Table>
					</Card>

					<Card variant="outlined" style={{ marginTop: 20, color: "#1a237e" }}>
						<Container>
							<h4>Domain</h4>
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="AI" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Agriculture" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Arts" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Biotechnology" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Construction" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Education" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="FInance" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Media and Entertainment" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Sports" />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Travel and tourism " />
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Others" />
						</Container>
					</Card>

				</Card>
			</div>
		);
	}
}
export default withStyles(styles)(Name);
