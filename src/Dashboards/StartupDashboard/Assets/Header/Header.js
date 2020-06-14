import React,{Component} from "react";
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

const useStyles = theme => ({
	grow: {
		flexGrow: 1
	},
	groupButtons:{
		position: "absolute",
  		right: "0px",
		padding:theme.spacing(1)
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
			sub1: "working in google",
			sub2: "Pune, Maharastra, India"
		};
	}

	render() {
    const { classes } = this.props;
	
	return (

		<div className={classes.grow}>

			<AppBar position="fixed">
				<Toolbar>
					
					<Typography className={classes.title} variant="h6" noWrap>
						Startup
					</Typography>	



					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>

				
					<div className={classes.groupButtons}>						
							
							<Button onClick={this.props.home}  style={{color:"white",margin:"5px"}} >Home</Button>
							<Button onClick={this.props.connections}  style={{color:"white",margin:"5px"}} >Connections</Button>
							<Button onClick={this.props.messaging}  style={{color:"white",margin:"5px"}} >Messaging</Button>
							<Button onClick={this.props.notification}  style={{color:"white",margin:"5px"}} >Notifications</Button>
							<Button onClick={this.props.profile}  style={{color:"white",margin:"5px"}} > Profile </Button>
						</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}}
export default withStyles(useStyles)(Header);
