import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import StartupCard from './StartupCard';
import axios from "axios";
import Cookies from "js-cookie";
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Animate from './Animate'
const useStyles = (theme) => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});


class ConnectedMentor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connections: []
    }
    this.getConnection = this.getConnection.bind(this);
  }

  componentWillMount() {
    this.getConnection()
  }

  getConnection() {
    var myid = Cookies.get('id')
    let mem = [];
    axios.get(`http://54.237.17.61/entityAction/user/myConnections`, { params: { id: myid } })
      .then(res => {
        mem = res.data;
        mem.map((item, i) => {
          console.log(item);
          this.setState({ connections: [...this.state.connections, <Animate id={item} />] })
          console.log("called")
        })
      })
    console.log(this.state.connections)
    console.log("called2")
  }
  render() {
    const { classes } = this.props;

    return (
      <div>

        <Card elevation={2} style={{ width: '100%', marginTop: 10, margin: 4 }}>
          <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} >
            My Startups
							</Typography>
          <Divider />
          <div style={{ height: 600, display: 'block', width: '100%' }}>
            <div style={{ background: '#ffffff', overflowY: 'scroll', height: '100%' }}>
              <div style={{ margin: 40 }}>
                <Grid>
                  {this.state.connections.map(child => child)}
                </Grid>

              </div>
            </div>
          </div>
        </Card>


      </div>

    );
  }
}

export default withStyles(useStyles)(ConnectedMentor);
