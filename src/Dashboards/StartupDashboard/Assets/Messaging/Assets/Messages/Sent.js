import Chip from '@material-ui/core/Chip';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(1,0,0,2),
    },
  }));
  
  export default function Sent(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Chip label={props.msg} color="primary" />
      </div>
    );
  }