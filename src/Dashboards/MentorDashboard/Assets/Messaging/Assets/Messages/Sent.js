import Chip from '@material-ui/core/Chip';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';
import  './msgBox.css'
class Sent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date:'',
    };
  }
  render() {
    //style={{ marginTop: 5, marginBottom: 5, textAlign: 'right', padding: 7,paddingRight:25 }}
    return (
      <div style={{ marginLeft: '40%', marginTop:10,marginBottom:10}}><Card elevation={5} style={{color:'#FFFFFF',background:'#455a64',marginTop:5,marginBottom:5,textAlign:'left',padding:7,paddingLeft:25 ,borderBottomLeftRadius:14,borderTopRightRadius:14,borderTopLeftRadius:14,}}>
        {this.props.msg}
        </Card>
        </div>
    );
  }
}
export default Sent;