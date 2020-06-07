import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PostFinal from './PostFinal';
import { List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
     
  },
  base:{
   
  }
}));

export default function VirtualizedList() {
  const classes = useStyles();

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
