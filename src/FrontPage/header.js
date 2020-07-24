import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

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

const gotoReg = () => {
  window.location = "/registrationPg"
}
const gotoLog = () => {
  window.location = "/LoginPg"
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{ background: "#501d1b" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kick Start up
          </Typography>
          <Button onClick={gotoReg} variant="outlined" style={{ color: "white", margin: "5px" }}>Register</Button>
          <Button onClick={gotoLog} variant="outlined" style={{ color: "white", margin: "5px" }}>Login</Button>
        </Toolbar>
      </AppBar >
    </div >
  );
}