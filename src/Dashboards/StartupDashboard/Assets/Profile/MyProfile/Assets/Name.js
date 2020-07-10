import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1,1,1,1),
			padding:theme.spacing(4,4,4,4),
			width: theme.spacing(100),
		}
	},
	cont: {
		display: "flex",
		margin: "20px 0px 0px 5px ",
		alignItems: "center",
		marginBotton:200
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
		};
		this.mapDomain = this.mapDomain.bind(this);
	}
	mapDomain() {
		if (this.props.data.domain != undefined) {
			console.log(this.props.data.domain.map((item, i) => (item)));
			return this.props.data.domain.map((item, i) => (<Button>{item}</Button>))
		}

	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Card elevation={3}>
					<Container className={classes.cont}>
						<Avatar alt="Sanket" className={classes.large} />
						<Container className={classes.spc}>
							<Typography variant="h4" gutterBottom>
								{this.props.data.startupName}
							</Typography>
							<Typography variant="h5" gutterBottom>
								Founder : {this.props.data.firstName + ' ' +this.props.data.lastName }
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
								Id : {this.props.data.id}
							</Typography>
							<Typography variant="subtitle1" gutterBottom>
								Address: {this.props.data.address+', '+this.props.data.city+', '+this.props.data.postalCode+', '+this.props.data.country	}
							</Typography>
						</Container>
					</Container>
					<Divider />
					<Container style={{marginTop:20}}>
						<div>
						domain : {this.mapDomain()}</div>
						<Typography variant="subtitle2" gutterBottom>
							profession: {this.props.data.profession}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							qualification: {this.props.data.qualification}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							email: {this.props.data.email}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							phone: {this.props.data.phone_no}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							age: {this.props.data.age}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							Website: {this.props.data.websiteURL}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							Dipp no: {this.props.data.dipp_no}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
							Description: {this.props.data.startupDescription}
							</Typography>
					</Container>
				</Card>
			</div>
		);
	}
}
export default withStyles(styles)(Name);
