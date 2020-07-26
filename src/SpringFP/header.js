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
import logo from '../Photo/name.png'
import AutoScale from 'react-auto-scale';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#767676',
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
      <AppBar position="fixed" style={{ background: "#eeeeee", height: '6.5vmin' }}>

        <div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto', marginLeft: '3vmin', marginRight: '3vmin' }}>
          <div className={classes.title}>
            <img style={{ width: '17vmin', height: '4vmin', marginTop: 'auto', marginBottom: 'auto' }} src={logo}></img>
          </div>
          {/* <Typography variant="h6" color="primary" >
            Kick Start Up
          </Typography>*/}
          <div style={{ marginRight: 20, width: '8vmin', height: '4vmin', marginTop: 'auto', marginBottom: 'auto' }}>
            <AutoScale>
              <Button variant="primary" onClick={gotoLog} >Login</Button>
            </AutoScale>
          </div>
          <div style={{ marginRight: 20, width: '14vmin', height: '4vmin', marginTop: 'auto', marginBottom: 'auto' }}>
            <AutoScale>
              <button onClick={gotoReg} class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Register</span>
              </button>
            </AutoScale>
          </div>
        </div>
      </AppBar>

    </div>
  );
}