import Chip from '@material-ui/core/Chip';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(0,2,0,0),
        float:'right',
    },
  }));
  
  export default function Rec() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Chip label="Hey bro"/>
      </div>
    );
  }