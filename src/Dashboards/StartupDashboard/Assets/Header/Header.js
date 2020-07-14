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

import MoreIcon from '@material-ui/icons/MoreVert'
import LogoutButton from './Logout'
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
	
	findMentor() {
		window.location = "/startupDashboard/FindMentors"
	}
	findInvestor() {
		window.location = "/startupDashboard/FindInvestor"
	}
	home() {
		window.location = "/startupDashboard/Home"
	}
	connections() {
		window.location = "/startupDashboard/Connections"
	}
	messaging() {
		window.location = "/startupDashboard/Messaging"
	}
	notification() {
		window.location = "/startupDashboard/Notification"
	}
	profile() {
		window.location = "/startupDashboard/Profile"
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
							<Button onClick={this.findMentor} style={{ color: "white", margin: "5px" }} >Find<SearchIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.findInvestor} style={{ color: "white", margin: "5px" }} >Find Investor<SearchIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.home} style={{ color: "white", margin: "5px" }} >Home<HomeIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.connections} style={{ color: "white", margin: "5px" }} >Connections<PersonAddIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.messaging} style={{ color: "white", margin: "5px" }} >Messaging<MessageIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.notification} style={{ color: "white", margin: "5px" }} >Notifications<NotificationsIcon style={{ marginLeft: 7 }} /></Button>
							<Button onClick={this.profile} style={{ color: "white", margin: "5px" }} > Profile <AccountCircle style={{ marginLeft: 7 }} /></Button>
							<LogoutButton	/>
						</div>
					</Toolbar>
				</AppBar>

			</div>
		);
	}
}
export default withStyles(useStyles)(Header);
