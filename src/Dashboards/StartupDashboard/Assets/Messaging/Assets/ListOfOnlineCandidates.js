import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Card from '@material-ui/core/Card';
import User from './User';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

const useStyles = theme => ({
  root: {
    width: '20%',
    height: "90%",
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#111",
    overflowY: "hidden",
    overflow:"hidden",
    right:0,
    backgroundColor: theme.palette.background.paper,
  },
  listItem:{
    margin:theme.spacing(0,0,0,0),
  },
  hd:{
    margin:theme.spacing(1,1,1,1),
  }
});

class ListOfOnlineCandidates extends Component {
  constructor(props) {
		super(props);

		this.state = {
			articles:[]
		};
  }
  
  componentWillMount(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30c361b9a9cb481fa76cceb1beda8c1b')
    .then((response)=>{
      return response.json();
    })
    .then((myJson)=>{
      this.setState({
        articles: myJson.articles
      })
    })
  };


  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Card className={classes.root} variant="outlined">
      <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                       <center>News</center> 
							</Typography>
      <Divider/>
        <div>{this.state.articles.map((item, index)=>{
            return(<Card>
              <Container>
              <h6 style={{color: "#696969"}}>{item.title}</h6>
              <img src={item.urlToImage} style={{widht:100, height: 100}}/><br/>
              <a href={item.url}>Read more</a><nr/></Container>
            </Card>)
        })}</div>

      </Card>
    </div>
  );
}
}
export default withStyles(useStyles)(ListOfOnlineCandidates);

