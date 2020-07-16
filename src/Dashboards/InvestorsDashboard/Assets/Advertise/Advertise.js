import React, { useState, Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const useStyles = theme => ({
  root: {
      width:"15%",
      margin:0,
      position:'fixed',
      height: "90%",
  },
  media:{
    height:140
  },
});

class Advertise extends Component {
  constructor(props) {
		super(props);

		this.state = {
			members:[]
		};
  }
  
  componentWillMount(){
  };


  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Card variant="outlined">
      <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                        Advertise
							</Typography>
      <CardMedia
          className={classes.media}
          image="http://blog.clickdimensions.com/wp-content/uploads/2017/05/BlogFeatureImage-5-Types-of-Online-Advertising-to-Generate-Leads.png"
          title="Contemplative Reptile"
        />
            <TextField style={{margin:10,width:"100%",paddingRight:20}}
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          variant="outlined"
        />
      <Divider/>
     <Button style={{margin:10,}}>send</Button>
      </Card>
      
    </div>
  );
}
}
export default withStyles(useStyles)(Advertise);