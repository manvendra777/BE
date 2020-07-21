import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" style= {{background: "#501d1b"}}>
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
          Kick Start up
          </Typography>
          <Link to= "./registrationPg"><Button variant="outlined"  style={{color:"white",margin:"5px"}}>Register</Button></Link>
          <Link to= "./LoginPg"><Button variant="outlined"  style={{color:"white",margin:"5px"}}>Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}