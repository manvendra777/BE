import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import ChatBase from './ChatBase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(75),
      height: theme.spacing(100),
    },
  },
  post: {
    margin: theme.spacing(0,1,0,1),
    height:theme.spacing(30),
},
postBox: {
    margin: theme.spacing(1,5,1,2),
    width:theme.spacing(71)
    
},
    hd:{
        margin: theme.spacing(1,1,1,2),
    }
}));

export default function SendMessage() {
  
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Paper variant="outlined" className={classes.post}>
                <Typography variant="h6" className={classes.hd}>send</Typography>
                <Divider/>
                <TextField
                    className={classes.postBox}
                    id="outlined-multiline-static"
                    label="write something here"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"/>
                    <div className={classes.hd} style={{float:"right"}}>
                        <Button color="primary" >Send</Button>
                    </div> 
        </Paper>
    </div>
  );
}
