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

class StartupCard extends React.Component {

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

    axios.get(`http://54.237.17.61/management/startup/profile/` + id)
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
    axios.get(`http://54.237.17.61/management/startup/photos/` + this.props.id)
      .then(res => {
        mem = res.data;
        self.setState({ image: mem })
      })
  }


  render() {
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/mentorDashboard/MyStartup/" + this.props.id
    }

    const bookMark=()=>{

      axios.get('http://54.237.17.61/entityAction/setBookmark?id='+Cookies.get("id")+'&target='+ this.props.id)
      .then(res=>{
        console.log("done")
      })
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
              <Typography gutterBottom variant="h8">
                {this.state.myProfile.startupDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={showProfile}>
              Profile
        </Button>
        <Button onClick={bookMark}>
              BookMark 
        </Button>
          </CardActions>
        </Card>
      </div>

    );
  }
}

export default withStyles(useStyles)(StartupCard);
