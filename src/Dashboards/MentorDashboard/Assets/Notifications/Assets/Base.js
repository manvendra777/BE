import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import List from '@material-ui/core/List';
import Noti from "./Noti"
import { withStyles } from "@material-ui/core/styles";
import { Component } from 'react';

const useStyles =theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  hd: {
    margin: theme.spacing(1,1,1,2),
},
listSection:{
  width: "100%",
  height: "100%",
    overflowY: "scroll",
    paddingRight: "17px",/* Increase/decrease this value for cross-browser compatibility */
    boxSizing: "content-box" /* So the width will be 100% + 17px */
},
notiList:{
  width: "100%",
    height: "92%",
    overflow: "hidden",
}
});

class Base extends Component {
  constructor(props) {
		super(props);

		this.state = {
			currComponent:'4'
		};
	}
  render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <div className={classes.hd}>
                <Typography variant="h6" >Your Notifications</Typography>
            </div>
            <Divider />
            <Divider/>
            <div className={classes.notiList}>

            <List className={classes.listSection}>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
              <Noti name = "Sanket Tupe" text ="hi Shubhamkar need some help" time="12 hr"/>
            </List>
            </div>
        </Paper>
    </div>
  );
  }
}
export default withStyles(useStyles)(Base);
