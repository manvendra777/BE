import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import User from './User'
import Chip from '@material-ui/core/Chip';
import Sent from './Messages/Sent'
import Rec from './Messages/Rec';
import SendMessage from './SendMessage'
import { withStyles } from "@material-ui/core/styles";
const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(75),
      height: theme.spacing(80),
    },
  },
});

class ChatBase extends Component {
  constructor(props) {
		super(props);

		this.state = {
			currComponent:'4'
		};
	}

  render() {
    const { classes } = this.props;
  const sendMsg=()=>{
    return <Sent/>
  }


  const recMsg=()=>{
    return <Rec/>
  }

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
      <User/>
      <Divider/>
        <Sent/>
        <Sent/>
        <Sent/>
        <Rec/>
      </Paper>
      <SendMessage/>
    </div>
  );
}}
export default withStyles(useStyles)(ChatBase);