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
import Link from '@material-ui/core/Link';

const useStyles = (theme) => ({
  root: {
    width: '80%',
    margin: 10,
    padding: 0,
    whiteSpace: 'normal'
  },
  media: {
    minHeight: 300,
  },
});

class BookMarkCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        myProfile: {},
    };
    
  }

  componentDidMount() {
    this.getName();
    var id = this.props.id
  }
  getName() {
 
        var persons;
        axios
          .get(
            `http://54.237.17.61/management/startup/profile/` +this.props.id
          )
          .then((res) => {
            persons = res.data;
            console.log(persons);
            this.setState({ myProfile: persons });
          });
    
  }

  render() {
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/mentorDashboard/MyStartup/" + this.props.id
    }

    return (
      <div>

       <Card className={classes.root} elevation={3}>
          <CardActionArea>
            <CardContent>
            <Link onClick={showProfile}>
              <Typography gutterBottom variant="h5" component="h2">
              {" " +this.state.myProfile.firstName +" " +this.state.myProfile.lastName}
              </Typography> </Link>

            </CardContent>
          </CardActionArea>
         
        </Card>
      </div>

    );
  }
}

export default withStyles(useStyles)(BookMarkCard);
