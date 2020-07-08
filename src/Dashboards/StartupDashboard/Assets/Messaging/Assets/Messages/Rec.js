import Chip from '@material-ui/core/Chip';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';
const useStyles =  theme => ({
    root: {
        width:'100%',
        marginTop:7,
        marginBottom:7,
    },
  });
  
  class Rec extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currComponent:'4'
      };
    }
  
    render() {
      const { classes } = this.props;
    return (
      <div style={{marginRight:250,marginBottom:10,marginTop:10}}><Card elevation={5} style={{color:'#435a7b',background:'#FFFFFF',marginTop:5,marginBottom:5,textAlign:'left',padding:7,paddingLeft:25 ,borderBottomLeftRadius:25,borderTopRightRadius:25,borderBottomRightRadius:25,}}>{this.props.msg}</Card></div> 
      );
  }}
  export default withStyles(useStyles)(Rec);