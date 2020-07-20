import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Comment from './Comment'
import Cookies from 'js-cookie'
import axios from 'axios'
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '4%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      comment: '',
      commentList: [],
      id: props.id,
      post: {},
      image: null,
      username: '',
      profilePicture: null,
      idOfUser: '',
      checkLike: false,
      count: 0,
      mnth: '',
      date: '',
      year: '',
    };
    this.keyPress = this.keyPress.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.getPostData = this.getPostData.bind(this)
    this.getProfilePicture = this.getProfilePicture.bind(this)
    this.getLikeStatus = this.getLikeStatus.bind(this)
    this.setLike = this.setLike.bind(this)
    this.setLikeButton = this.setLikeButton.bind(this)
    this.getCount = this.getCount.bind(this)
  }

  componentWillMount() {
    var d = new Date(this.props.date);
    var mnth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var n = mnth[d.getMonth()]
    var dateH = d.getDate();
    var year = d.getFullYear()
    this.setState({ mnth: n, date: dateH, year: year })
    this.getPostData()

  }

  setLikeButton() {
    if (this.state.checkLike) {
      return (<IconButton onClick={this.setLike} style={{ color: 'red' }} aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>)
    } else {
      return (<IconButton onClick={this.setLike} aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>)
    }
  }

  getCount() {
    var self = this;
    var mem;
    var postId = this.state.id;
    axios.get(`http://localhost:8087/forum/getCount`, { params: { idOfPost: postId } })
      .then(res => {
        mem = res.data;
        self.setState({ count: mem })
      })
  }


  getLikeStatus() {
    var self = this;
    var mem;
    console.log(this.state.idOfUser);
    axios.get(`http://localhost:8087/forum/checkLike`, { params: { idOfPost: self.state.id, idOfMember: Cookies.get('id') } })
      .then(res => {
        mem = res.data;
        self.setState({ checkLike: mem })
      })
  }

  setLike() {
    var self = this;
    var postId = this.state.id;
    console.log(this.state.id);
    axios.post('http://localhost:8087/forum/addLikes', null, { params: { idOfPost: postId, idOfMember: Cookies.get('id') } }).then(res => {
      console.log(res.data);
      if (res.data) {
        self.setState({ checkLike: true })
        self.setState({ count: self.state.count + 1 })
      } else {
        self.setState({ checkLike: false })
        self.setState({ count: self.state.count - 1 })
      }
    })
  }


  getProfilePicture() {
    var self = this;
    var mem;
    console.log(this.state.idOfUser);
    axios.get(`http://localhost:8082/community/photos/` + this.state.idOfUser)
      .then(res => {
        mem = res.data;
        self.setState({ profilePicture: mem })
      })
  }

  getPostData() {
    var ads;
    var self = this;
    axios.get(`http://localhost:8087/forum/getPostbyId`, { params: { id: this.state.id } })
      .then(res => {

        ads = res.data;
        self.setState({ post: ads })
        self.setState({ username: ads.userId })
        self.setState({ image: ads.image.data })
        self.setState({ idOfUser: ads.idOfUser })
        console.log(ads);
        ads.commentList.map((item, i) => {
          self.setState({ commentList: [...self.state.commentList, <Comment name={item.userId} comment={item.commentBody} />] })
        })
        self.getProfilePicture()
        self.getLikeStatus()
        self.getCount();
        console.log(self.state.checkLike);
      })
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      var self = this;
      axios.post('http://localhost:8087/forum/addComment', {
        "discussionId": this.props.id,
        "commentBody": self.state.comment,
        "userId": Cookies.get('username')
      }).then(res => {
        console.log(res.data);
        self.setState({ commentList: [...self.state.commentList, <Comment name={Cookies.get('username')} comment={self.state.comment} />] })
        self.setState({ comment: '' })
      })
    }
  }
  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes } = this.props;

    const handleChane = (e) => {
      this.setState({ comment: e.target.value });
    }
    return (
      <Card elevation={5} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src={`data:image/jpeg;base64,${this.state.profilePicture}`} className={classes.avatar}>
            </Avatar>
          }

          title={this.state.username}
          subheader={this.state.mnth + '  ' + this.state.date + ', ' + this.state.year}
        />
        <CardMedia
          className={classes.media}
          image={`data:image/jpeg;base64,${this.state.image}`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            Title : {this.state.post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description : {this.state.post.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {this.setLikeButton()}
          {this.state.count}

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>

          <CardContent>
            <Typography paragraph>Discussion:</Typography>
            <div>
              {this.state.commentList.map(child => child)}
            </div>
          </CardContent>
          <TextField
            style={{ width: '98%', margin: '1%' }}
            id="outlined-multiline-static"
            label="Discuss"
            onChange={this.handleChange}
            rows={1}
            variant="outlined"
            value={this.state.comment}
            onChange={handleChane}
            onKeyDown={this.keyPress}
          />
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);