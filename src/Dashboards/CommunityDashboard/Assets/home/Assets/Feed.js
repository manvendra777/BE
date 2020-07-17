import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Button } from 'react-bootstrap';
import AskQue from './AskQue'


const useStyles = theme => ({
  root: {
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  spc: {
    margin:theme.spacing(0),
  
  },
});

class Feed extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <AskQue/>
                <h1>{this.props.match.params.Domain}</h1>
            </div>
        );
    }
}

export default withStyles(useStyles)(Feed);