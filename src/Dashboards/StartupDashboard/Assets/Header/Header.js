import React, { Component } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MoreIcon from '@material-ui/icons/MoreVert'
import LogoutButton from './Logout'
import FunctionsIcon from '@material-ui/icons/Functions';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = theme => ({
	grow: {
		flexGrow: 1
	},
	groupButtons: {
		position: "absolute",
		right: "0px",
		padding: theme.spacing(1),
		marginRight: 20
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto"
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch"
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	}
});

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Sanket Tupe",
			sub1: "working ",
			sub2: "Pune, Maharastra, India",
		};
	}
	advertiseManagement() {
		window.location = "/startupDashboard/MyAdvertise"
	}
	findMentor() {
		window.location = "/startupDashboard/FindMentors"
	}
	findInvestor() {
		window.location = "/startupDashboard/FindInvestor"
	}

	connections() {
		window.location = "/startupDashboard/Connections"
	}
	messaging() {
		window.location = "/startupDashboard/Messaging"
	}

	profile() {
		window.location = "/startupDashboard/Profile"
	}

	BusinessEvalution() {
		window.location = "/startupDashboard/BusinessEvalution"
	}
	Home() {
		window.location = '/startupDashboard/Home'
	}

	createJob(){
		window.location= '/startupDashboard/MyJobs'
	}


	render() {
		const { classes } = this.props;
		return (
			<div className={classes.grow}>

				<AppBar position="fixed">
					<Toolbar>
						<div onClick={this.props.home} >
							<Typography className={classes.title} variant="h6" noWrap>
								Startup
							</Typography>
						</div>
						<div className={classes.groupButtons}>
							<Button onClick={this.Home} style={{ color: "white", margin: "5px" }} > <HomeIcon style={{ marginRight: 7 }} />Home </Button>
							<Button onClick={this.createJob} style={{ color: "white", margin: "5px" }} >  <WorkIcon style={{ marginRight: 7 }} />Create Jobs</Button>
							<Button onClick={this.advertiseManagement} style={{ color: "white", margin: "5px" }} > <NoteAddIcon style={{ marginRight: 7 }} />Advertise Management </Button>
							<Button onClick={this.BusinessEvalution} style={{ color: "white", margin: "5px" }} ><FunctionsIcon style={{ marginRight: 7 }} />Calculator</Button>
							<Button onClick={this.findMentor} style={{ color: "white", margin: "5px" }} ><SearchIcon style={{ marginRight: 7 }} />Find Mentor</Button>
							<Button onClick={this.findInvestor} style={{ color: "white", margin: "5px" }} ><SearchIcon style={{ marginRight: 7 }} />Find Investor</Button>
							<Button onClick={this.connections} style={{ color: "white", margin: "5px" }} ><PersonAddIcon style={{ marginRight: 7 }} />Connections</Button>
							<Button onClick={this.messaging} style={{ color: "white", margin: "5px" }} ><MessageIcon style={{ marginRight: 7 }} />Messaging</Button>
							<Button onClick={this.profile} style={{ color: "white", margin: "5px" }} >  <AccountCircle style={{ marginRight: 7 }} />Profile</Button>
							<LogoutButton />
						</div>
					</Toolbar>
				</AppBar>

			</div>
		);
	}
}
export default withStyles(useStyles)(Header);
