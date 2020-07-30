import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import axios from 'axios';
import Cookies from "js-cookie";
import BooKMarkCard from './BookMarkCard';
import Grid from '@material-ui/core/Grid'

const useStyles = (theme) => ({
  root: {
    width: '20%',

  },
  media: {
    height: '10%',
  },
  
});

class BookMarkedStartup extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      connectedID: []
    }
    this.getConnectedID = this.getConnectedID.bind(this);
  }

  componentWillMount() {
    this.getConnectedID()
  }

  getConnectedID() {

    let mem = [];
    axios.get('http://54.237.17.61/entityAction/getBookmark?id=' + Cookies.get("id"))
      .then(res => {
        mem = res.data;
        console.log(mem);
        if (mem != '') {
          mem.map((item, i) => {
            console.log(item);
            this.setState({ connectedID: [...this.state.connectedID, <BooKMarkCard id={item} />] })
            console.log("here")
          }
          )
        }
      })

  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card elevation={5} style={{ width: '30%', marginTop: 10, marginLeft: '50%' }}>
          <Typography variant="h5" color='primary' style={{ backgroundColor: '#eeeeee', padding: 10 }} >
            BookMark
							</Typography>
          <Divider />

          <div style={{ margin: 40 }}>
            <Grid>
              {this.state.connectedID.map(child => child)}
            </Grid>
          </div>
        </Card>
      </div>

    )
  }

}
export default withStyles(useStyles)(BookMarkedStartup);
