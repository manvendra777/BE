import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { spacing } from "@material-ui/system";
import List from "@material-ui/core/List";
import Invitation from "./Invitation";
import axios from "axios";
import Connections from "../Connections";
import Cookies from 'js-cookie'
const useStyles = (theme) => ({
  root: {
  },
  hd: {
    margin: theme.spacing(1, 1, 1, 2),
  },
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
      .get(`http://54.237.17.61/entityAction/user/pendingRequests`, { params: { id: Cookies.get('id') } })
      .then(({ data }) => data);
    this.setState({ invites: data });
    console.log(data);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.hd}>
          <Typography variant="h5" color='primary' style={{ margin: 15 }} gutterBottom>
          Your Invitations
							</Typography>
          </div>
          <Divider />
          <Divider />
          <div className={classes.notiList}>
            <List className={classes.listSection}>
              {this.state.invites.map((item) => (
                <Invitation
                  key={item}
                  name={item}
                  id={item}
                  de={this.getUsers}
                />
              ))}
            </List>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Base);
