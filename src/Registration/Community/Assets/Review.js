import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import CardM from '@material-ui/core/Card';
import Cookies from 'js-cookie';
import Grid from '@material-ui/core/Grid';


class StartupConfirm extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {


    const { values: { firstName, lastName, interest } } = this.props;

    return (

      <MuiThemeProvider>
        <React.Fragment>

          <Grid container spacing={0}>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem
                  primaryText="First Name:"
                  secondaryText={firstName}
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem
                  primaryText="Last Name:"
                  secondaryText={lastName}
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={6}>
              <List>
                <ListItem
                  primaryText="Intrest:"
                  secondaryText={interest}
                />
              </List>
            </Grid>


          </Grid>

        </React.Fragment>

      </MuiThemeProvider >


    );

  }

}

export default StartupConfirm;