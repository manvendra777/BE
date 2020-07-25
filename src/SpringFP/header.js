import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import './styles.scss';

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
  const gotoReg = () => {
    window.location = "registrationPg"
  }
  const gotoLog = () => {
    window.location = "LoginPg"
  }
  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{ background: "#eeeeee" }}>
        <Toolbar>

          <Typography variant="h6" color="primary" className={classes.title}>
            Kick Start Up
          </Typography>
          <Button style={{marginRight:20}} variant="primary" onClick={gotoLog} >Login</Button>
          
          <div style={{zoom:0.9}}>
            <button onClick={gotoReg} class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Register</span>
            </button>

          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}