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
      comment:''
    };
    this.keyPress = this.keyPress.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }
  keyPress(e) {
    if (e.keyCode == 13) {
      alert('sent: ' + this.state.comment)
      this.setState({comment:''})
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
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
          </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            Title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description : This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
            Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
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
            <Comment name="Sanket Tupe" comment="hey I Liked your Post its nice" />
            <Comment name="Sanket Tupe" comment="hey I Liked your Post its nice" />
            <Comment name="Sanket Tupe" comment="hey I Liked your Post its nice" />
            <Comment name="Sanket Tupe" comment="hey I Liked your Post its nice" />
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
