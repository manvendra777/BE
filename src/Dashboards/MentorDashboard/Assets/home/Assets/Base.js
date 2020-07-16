import React, { Component } from 'react';
import Post from './Post'
import Feeds from './Feeds'
import PostFinal from './PostFinal'
import { withStyles } from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostList from "./PostList"

const useStyles = theme => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  spc: {
    margin:theme.spacing(0),
  
  },
});

class Base extends Component {
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

    <div style={{right:"25%",float:"right",position:"relative"}}>
        <div className={classes.spc}>
        <Post/>
        </div>
        <div className={classes.root}>
          <PostList/>
        </div>
    </div>
  );
}
}
export default withStyles(useStyles)(Base);