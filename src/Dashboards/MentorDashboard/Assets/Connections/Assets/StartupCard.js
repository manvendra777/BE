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
import { Icon } from "@material-ui/core";
import Cookies from 'js-cookie';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    margin: 10,
    padding: 0,
    marginTop: 30,
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
      image: null,
      isBooked: false,
    };
    this.getImage = this.getImage.bind(this);

  }

  componentDidMount() {
    var id = this.props.id
    var persons;

    axios.get(`http://localhost:8082/management/startup/profile/` + id)
      .then(res => {
        persons = res.data;

        this.setState({ myProfile: persons })
      })
  }

  componentWillMount() {
    this.getImage()
    this.getBookmarks()
  }
  getImage() {
    var self = this;
    var mem;
    axios.get(`http://localhost:8082/management/startup/photos/` + this.props.id)
      .then(res => {
        mem = res.data;
        self.setState({ image: mem })
      })
  }

  getIcon() {
    if (this.state.isBooked) {
      return <BookmarkIcon theme="filled" />
    }
    else {
      return <BookmarkIcon theme="outlined" />
    }
  }
  getBookmarks = () => {
    axios.get('http://localhost:8083/entityAction/getBookmark?id=' + Cookies.get("id"))
      .then(res => {
        if(res.data.includes(this.props.id)){
          this.setState({isBooked:true})
        }
      })
  }
  render() {
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/mentorDashboard/MyStartup/" + this.props.id
    }


    const bookMark = () => {
      axios.get('http://localhost:8083/entityAction/setBookmark?id=' + Cookies.get("id") + '&target=' + this.props.id)
        .then(res => { this.setState({ isBooked: !this.state.isBooked }) })
    }
    return (
      <div>

        <Card className={classes.root} elevation={3}>
          <CardActionArea onClick={showProfile}>
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

            <Button onClick={bookMark}>
              {this.state.isBooked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </Button>
          </CardActions>
        </Card>
      </div>

    );
  }
}

export default withStyles(useStyles)(StartupCard);
