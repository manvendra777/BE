import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from "@material-ui/core/styles";
import PostFinal from './PostFinal';
import { List } from '@material-ui/core';


const useStyles = theme => ({
  root: {
     
  },
  base:{
   
  }
});

class PostList extends Component {
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
        <div className={classes.base}> 
     <List>
         <ListItem>
             <PostFinal/>
         </ListItem>
         <ListItem>
             <PostFinal/>
         </ListItem>
         <ListItem>
             <PostFinal/>
         </ListItem>
         <ListItem>
             <PostFinal/>
         </ListItem>
     </List>
     </div>
    </div>
  );
}
}
export default withStyles(useStyles)(PostList);

