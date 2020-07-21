import React, { useState, Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Cookies from 'js-cookie';
import { shadows } from '@material-ui/system';

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
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
});

class Advertise extends Component {
  constructor(props) {
		super(props);

		this.state = {
      members:[],
      image:null,
      myProfile: {}
    };
    this.getImage  = this.getImage.bind(this);
  }
  
  componentWillMount(){
    this.getImage()
    this.getName()
  };

  getImage() {
    var self = this;
    var mem;
    axios.get(`http://54.237.17.61/management/startup/photos/`+Cookies.get('id'))
        .then(res => {
            mem = res.data;
            self.setState({ image: mem })
        })
}
showImage() {
    return (<img src={`data:image/jpeg;base64,${this.state.image}`} />)
}

getName() {
  var persons  
  axios.get(`http://54.237.17.61/management/startup/profile/`+Cookies.get('id'))
      .then(res => {
        persons = res.data;
				console.log(persons);
				this.setState({ myProfile: persons })
      })
}

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" variant="circle" src={`data:image/jpeg;base64,${this.state.image}`} className={classes.large} style={{marginLeft: 35}}/>
          }
        />
         <Typography variant="h7" color= "primary">
              <div style={{marginLeft: 35}}>  {' ' + this.state.myProfile.firstName + ' ' + this.state.myProfile.lastName}</div>
            </Typography>
            <Typography variant="h7" >
              <small style={{marginLeft: 45, color: "#696969"}}>  { this.state.myProfile.startupName}</small>
            </Typography>
            <Divider />
      </Card>
      
    </div>
  );
}
}
export default withStyles(useStyles)(Advertise);