import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";


const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(100),
			height: theme.spacing(50)
		}
	},
	cont: {
		display: "flex",
		margin: "20px 0px 0px 5px ",
		alignItems: "center"
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
			name: "Sanket Tupe",
			sub1: "working in google",
			sub2: "Pune, Maharastra, India"
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Card elevation={3}>
					<Container className={classes.cont}>
						<Avatar alt="Sanket" className={classes.large} />
						<Container className={classes.spc}>
							<Typography variant="h5" gutterBottom>
								{this.state.name}
							</Typography>

							<Typography variant="subtitle1" gutterBottom>
								{this.state.sub1}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
								{this.state.sub2}
							</Typography>
						</Container>
					</Container>
				</Card>
			</div>
		);
	}
}
export default withStyles(styles)(Name);
