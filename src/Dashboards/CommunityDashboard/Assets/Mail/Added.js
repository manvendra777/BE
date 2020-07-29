import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Divider, Link } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useState,useEffect } from 'react';
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));


export default function Added(props) {
  const classes = useStyles();
  const changeChatWindow = () => {
    props.method(props.name,props.text);
  }

  return (
    <div className={classes.root}>
      <ListItem onClick={changeChatWindow} className={classes.listItem} button>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <ListItemText style={{ marginLeft: "16px", }} primary={props.name} secondary={props.founder} />
      </ListItem>
    </div>
  );
}