import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
});

class PostButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Sanket Tupe",
			sub1: "working in google",
			sub2: "Pune, Maharastra, India"
		};
	}

	render() {
    const { classes } = this.props;
  return (
    <div className={classes.root}>
  
      <input accept="image/*" className={classes.input} id="icon-img-file" type="file" />
      <input accept="video/*" className={classes.input} id="icon-vid-file" type="file" />
      <label htmlFor="icon-vid-file">
        <IconButton color="primary" aria-label="upload video" component="span">
          <VideocamIcon />
        </IconButton>
      </label>
      <label htmlFor="icon-img-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      


      <Button variant="contained" color="primary" component="span">
          Post
        </Button>
    </div>
  );
}
}
export default withStyles(useStyles)(PostButtons);
