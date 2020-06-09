import React from 'react';
import Post from './Post'
import Feeds from './Feeds'
import PostFinal from './PostFinal'


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostList from "./PostList"

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  spc: {
    margin:theme.spacing(0),
  
  },
}));


export default function Base() {
  const classes = useStyles();
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
