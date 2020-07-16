import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Button } from 'react-bootstrap';
import Feed from './Feed'
import { Link, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from 'material-ui/styles/typography';

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin:theme.spacing(2),
    

  },
  
});

class Base extends Component {
	constructor(props) {
		super(props);

		this.state = {
      DomainNo:""
    };
	}

 
	render() {
    const { classes } = this.props;

    const openFeedPage=(Domain)=>{
      this.setState({
        DomainNo: Domain
      });
     window.location= "/communityDashboard/Feed/"+Domain
    }
    
  return (

 

    <div style={{right:"25%",float:"right",position:"relative",}}>
        <div style={{width: 600, height: 'auto'}}>
        <Card>
          <Container>
            
            <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('1')}}>
                <img
                src="agri.jpeg"
                alt="Agriculture"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('2')}}>
                <img
                src="agri.jpeg"
                alt="AI"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('3')}}>
                <img
                src="agri.jpeg"
                alt="Sports"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('4')}}>
                <img
                src="agri.jpeg"
                alt="Education"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('5')}}>
                <img
                src="agri.jpeg"
                alt="Sports"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('6')}}>
                <img
                src="agri.jpeg"
                alt="Construction"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('7')}}>
                <img
                src="agri.jpeg"
                alt="Arts"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('8')}}>
                <img
                src="agri.jpeg"
                alt="Automobile"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('9')}}>
                <img
                src="agri.jpeg"
                alt="Netwroking"
                />
              </CardActions>
              </Card>    
              <Card style={{marginTop:30}}>
              <CardActions onClick={()=>{openFeedPage('10')}}>
                <img
                src="agri.jpeg"
                alt="Other"
                />
              </CardActions>
              </Card>   
              
        </Container>
        </Card>
        </div>
    </div>
  );
}
}
export default withStyles(useStyles)(Base);