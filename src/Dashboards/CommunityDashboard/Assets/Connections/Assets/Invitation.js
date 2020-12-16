import React, { up, useEffect, Component } from "react";
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
import Cookies from "js-cookie";
import { blue } from "@material-ui/core/colors";
import { Spring, config } from "react-spring/renderprops";

import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
});

class Invitation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: "",
      pressed: false,
      col: "white",
    };
  }

  accept = () => {
    this.setState({ animate: "1000px" });
    this.setState({ col: "green" });
    var self = this;
    axios
      .post("http://localhost:8083/entityAction/user/acceptRequest", null, {
        params: { id: Cookies.get("id"), target: this.props.id },
      })
      .then((res) => {
        this.setState({ pressed: true });
        setTimeout(
          function () {
            //Start the timer
            self.props.de(); //After 1 second, set render to true
          }.bind(this),
          1000
        );
      });
  };

  del = () => {
    this.setState({ animate: "-1000px" });
    this.setState({ col: "red" });
    var self = this;
    axios
      .post("http://localhost:8083/entityAction/user/deleteRequest", null, {
        params: { id: this.props.id, target: Cookies.get("id") },
      })
      .then((res) => {
        this.setState({ pressed: true });
        setTimeout(
          function () {
            //Start the timer
            self.props.de(); //After 1 second, set render to true
          }.bind(this),
          5000
        );
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Spring
        config={config.slow}
        from={{ opacity: 1, transform: "translate3d(0px,0px,0)" }}
        to={{
          opacity: this.state.pressed ? 0 : 1,
          transform: this.state.pressed
            ? "translate3d(" + this.state.animate + ",0px,0)'"
            : "translate3d(0px,0px,0)",
          backgroundColor: this.state.pressed ? this.state.col : "white",
        }}
      >
        {(props) => (
          <div style={props}>
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={this.props.name}
                  secondary={this.props.id}
                />
                <ListItemSecondaryAction>
                  <Button style={{ margin: "12px" }} onClick={this.del}>
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.accept}
                  >
                    Accept
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
export default withStyles(styles)(Invitation);
