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
import PostButtons from './PostButtons'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: theme.spacing(100),
    width:theme.spacing(100),
    margin:theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(30),
    },
  },
  post: {
    
    height:theme.spacing(30),
   
},
postBox: {
    margin: theme.spacing(1,5,1,2),
    width:theme.spacing(95)
    
},
    hd:{
        margin: theme.spacing(1,1,1,2),
    }
}));

export default function Post() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Paper elevation={3} >
                <Typography variant="h6" className={classes.hd}>post</Typography>
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
                      <PostButtons/>  
                    </div>  
        </Paper>
    </div>
  );
}
