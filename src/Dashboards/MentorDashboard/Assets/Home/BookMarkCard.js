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
    width: '100%',
    whiteSpace: 'normal',
    marginTop: 10
  },
  media: {
    minHeight: 200,
  },
});

class BookMarkCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myProfile: {},
      image: ''
    };

  }

  componentDidMount() {
    this.getName();
    this.getImage()
    var id = this.props.id
  }
  getName() {

    var persons;
    axios
      .get(
        `http://50.19.216.143/management/startup/profile/` + this.props.id
      )
      .then((res) => {
        persons = res.data;
        console.log(persons);
        this.setState({ myProfile: persons });
      });

  }
  getImage = () => {
    var self = this;
    var mem;
    axios.get(`http://50.19.216.143/management/startup/photos/` + this.props.id)
      .then(res => {
        mem = res.data;
        this.setState({ image: mem })
      })
  }
  render() {
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/mentorDashboard/MyStartup/" + this.props.id
    }

    return (
      <div>
        <Card className={classes.root} elevation={2}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`data:image/jpeg;base64,${this.state.image}`}
              title={this.state.myProfile.firstName}
            />
            <CardContent>
              <Link onClick={showProfile}>

                <Typography gutterBottom variant="h6" >
                  {" " + this.state.myProfile.startupName}
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                  {" " + this.state.myProfile.firstName + " " + this.state.myProfile.lastName}
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                  {" " + this.state.myProfile.email}
                </Typography>
              </Link>
            </CardContent>
          </CardActionArea>

        </Card>
      </div>

    );
  }
}

export default withStyles(useStyles)(BookMarkCard);
