import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";
import List from "@material-ui/core/List";
import RefreshIcon from "@material-ui/icons/Refresh";
import Getname from "./Getname";
import Invitation from "./Invitation";
import axios from "axios";
import Connections from "../Connections";
import Cookies from 'js-cookie';
import ConnectedStartup from './ConnectedStartup';


const useStyles = (theme) => ({
  root: {},
  listSection: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    paddingRight:
      "17px" /* Increase/decrease this value for cross-browser compatibility */,
    boxSizing: "content-box" /* So the width will be 100% + 17px */,
  },
  notiList: {
    width: "100%",
    height: "92%",
    overflow: "hidden",
  },
  hd: {
    display: "flex",
  },
});

class Base extends Component {
  state = {
    invites: [],
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    let data = await axios
      .get(`http://localhost:8083/entityAction/user/pendingRequests`, {
        params: { id: Cookies.get("id") },
      })
      .then(({ data }) => data);
    this.setState({ invites: data });
    console.log(this.state.invites);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.hd}>
            <Typography
              variant="h5"
              color="primary"
              style={{ margin: 15 }}
              gutterBottom
            >
              Your Invitations
            </Typography>

            <RefreshIcon
              style={{
                cursor: "pointer",
                margin: 15,
                marginLeft: "auto",
                marginRight: 25,
              }}
              onClick={this.getUsers}
            />
          </div>
          <Divider />
          <Divider />
          <div className={classes.notiList}>
            <List className={classes.listSection}>
              {this.state.invites.map((item) => (
                <Getname dem={this.getUsers} id={item} />
              ))}
            </List>
          </div>
        </Paper>
        <div style={{marginTop: 20}}>
        <ConnectedStartup/>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Base);
