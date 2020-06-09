import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ImageIcon from '@material-ui/icons/Image';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  hd: {
    margin: theme.spacing(1,1,1,2),
},
  post: {
    margin: theme.spacing(1,1,1,2),
    height:theme.spacing(60),
},
}));

export default function Feeds() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        <Paper elevation={3} className={classes.post}>
            <div className={classes.hd}>
                <Typography variant="h6" >Feeds</Typography>
            </div>
            <Divider />
            <Divider/>
        </Paper>
    </div>
  );
}
