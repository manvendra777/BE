import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { Component } from 'react';

const useStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Noti extends Component {
  constructor(props) {
		super(props);

		this.state = {
			currComponent:'4'
		};
	}

  render() {
    const { classes } = this.props;
  
  return (
   <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.props.name} secondary={this.props.text} />
            <ListItemSecondaryAction>
            <Typography variant="overline" display="block" gutterBottom>{this.props.time}
      </Typography>
            </ListItemSecondaryAction>
 
      </ListItem>
      <Divider/>
      </div>
  );
}
}
export default withStyles(useStyles)(Noti);
