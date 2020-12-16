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

const useStyles = (theme) => ({
  root: {

    margin: 10,
    padding: 0,
    whiteSpace: 'normal'
  },
  media: {
    minHeight: 200,
  },
});

class MentorCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myProfile: {},
      image: null
    };
    this.getImage = this.getImage.bind(this);

  }

  componentDidMount() {
    var id = this.props.id
    var persons;
    console.log("called33");
    console.log(this.props.id)
    axios.get(`http://localhost:8082/management/mentor/profile/` + id)
      .then(res => {
        persons = res.data;
        console.log(persons);
        this.setState({ myProfile: persons })
      })
  }

  componentWillMount() {
    this.getImage()
  }
  getImage() {
    var self = this;
    var mem;
    axios.get(`http://localhost:8082/management/mentor/photos/` + this.props.id)
      .then(res => {
        mem = res.data;
        self.setState({ image: mem })
      })
  }


  render() {
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/startupDashboard/MyMentor/" + this.props.id
    }
    return (
      <div>

        <Card className={classes.root} elevation={3}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`data:image/jpeg;base64,${this.state.image}`}
              title={this.state.myProfile.firstName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.state.myProfile.firstName} {this.state.myProfile.lastName}
              </Typography>
              <div>
                <Typography gutterBottom variant="h8">
                  {this.state.myProfile.about_yourself}
                </Typography>
              </div>
              <div>
                <Typography gutterBottom variant="h8">
                 Phone: {this.state.myProfile.phone_no}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={showProfile}>
              Profile
        </Button>
            <Button onClick={() => { window.location = "startupDashboard/Messaging" }}>
              Message
            </Button>
          </CardActions>
        </Card>
      </div>

    );
  }
}

export default withStyles(useStyles)(MentorCard);
