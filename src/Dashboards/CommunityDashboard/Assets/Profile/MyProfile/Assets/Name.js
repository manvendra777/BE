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
import Cookies from 'js-cookie';
const styles = theme => ({
	root: {
		
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
			interests: "",
			image:null,
		};

		this.mapDomain = this.mapDomain.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.handleModal.bind(this);
		this.getImage = this.getImage.bind(this)
	
	}
	componentWillMount(){
        this.getImage()
    }
    getImage() {
        var self = this;
        var mem;
        axios.get(`http://54.237.17.61/management/community/photos/`+Cookies.get('id'))
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
			interests: props.data.interests,
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
			interests: this.state.interests,
		}

		console.log(data);

		axios.post('http://54.237.17.61/management/community/profile/'+Cookies.get('id'), data = data)
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
								defaultValue={this.state.interests}
								name="interests"
								type="number"
								label="Interests"
								onChange={this.handleChange.bind(this)}

							/>
							<br />
							
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
							<Avatar alt="Sanket" src={`data:image/jpeg;base64,${this.state.image}`} className={classes.large} /></Grid>
						<Grid>
							<Container className={classes.spc}>
								<Typography variant="h4" gutterBottom style={{ color: "#1a237e" }}>
									{this.props.data.firstName + ' ' + this.props.data.lastName}
								</Typography>
								<Grid/>
									
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
									<TableCell><h6 style={{ color: "#1a237e" }}>Interests</h6></TableCell>
									<TableCell>{this.props.data.interests}</TableCell>
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
