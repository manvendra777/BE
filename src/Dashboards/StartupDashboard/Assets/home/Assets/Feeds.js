import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from "@material-ui/core/styles";
const useStyles = theme => ({
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
  post: {
    margin: theme.spacing(1,1,1,2),
    height:theme.spacing(60),
},
});


class Feeds extends Component {
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
        
        <Paper elevation={3} className={classes.post}>
            <div className={classes.hd}>
                <Typography variant="h6" >Feeds</Typography>
            </div>
            <Divider />
            <Divider/>
        </Paper>
    </div>
  );
}
}
export default withStyles(useStyles)(Feeds);