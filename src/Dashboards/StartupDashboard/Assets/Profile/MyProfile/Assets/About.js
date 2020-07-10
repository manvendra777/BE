import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(100),
			height: theme.spacing(20)
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

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			about: "about"
		};
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Card elevation={3}>
					<Container className={classes.cont}>
						<Container className={classes.spc}>
							<Typography variant="h5" gutterBottom>
								About
							</Typography>

							<Typography variant="subtitle1" gutterBottom>
								{this.state.about}
							</Typography>
						</Container>
					</Container>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(About);
