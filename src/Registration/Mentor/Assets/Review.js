import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import CardM from "@material-ui/core/Card";
import Cookies from "js-cookie";
import Grid from "@material-ui/core/Grid";

class StartupConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        phone_no,
        experience_in_domain,
        qualification,
        method_of_contact,
        what_makes_you_a_great_mentor,
        about_yourself,
        address,
        postalCode,
        city,
        country,
        Incentive,
      },
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem primaryText="First Name:" secondaryText={firstName} />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem primaryText="Last Name:" secondaryText={lastName} />
              </List>
            </Grid>

            <Grid item xs={12} sm={12}>
              <List>
                <ListItem primaryText="Email" secondaryText={email} />
              </List>
            </Grid>
            <Grid item xs={12} sm={12}>
              <List>
                <ListItem
                  primaryText="experience in Domain"
                  secondaryText={experience_in_domain}
                />
              </List>
            </Grid>
            <Grid item xs={12} sm={12}>
              <List>
                <ListItem
                  primaryText="Highest Qualification"
                  secondaryText={qualification}
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={12}>
              <List>
                <ListItem
                  primaryText="About Yourself"
                  secondaryText={about_yourself}
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem primaryText="Phone No." secondaryText={phone_no} />
              </List>
            </Grid>

            <Grid item xs={12} sm={12}>
              <List>
                <ListItem primaryText="Address" secondaryText={address} />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem primaryText="City" secondaryText={city} />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem primaryText="Country" secondaryText={country} />
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem
                  primaryText="Postal Code"
                  secondaryText={postalCode}
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={12}>
              <List>
                <ListItem primaryText="Incentive" secondaryText={Incentive} />
              </List>
            </Grid>
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default StartupConfirm;
