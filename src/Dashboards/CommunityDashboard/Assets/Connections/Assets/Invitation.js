import React, { up, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import axios from "axios";
import Cookies from 'js-cookie';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Invitation(props) {
  const classes = useStyles();

  const accept = () => {
    axios
      .post("http://54.237.17.61/user/acceptRequest", null, {
        params: { id: Cookies.get('id'), target: props.id },
      })
      .then((res) => {
        props.de();
      });
  };
  const del = () => {
    axios
      .post("http://54.237.17.61/user/deleteRequest", null, {
        params: { id: Cookies.get('id'), target: props.id },
      })
      .then((res) => {
        props.de();
      });
  };
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.id} />
        <ListItemSecondaryAction>
          <Button style={{ margin: "12px" }} onClick={del}>
            Delete
          </Button>
          <Button variant="contained" color="primary" onClick={accept}>
            Accept
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
}
