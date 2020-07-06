import Chip from '@material-ui/core/Chip';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
const useStyles =  theme => ({
    root: {
      margin:theme.spacing(1,1,0,2),
        width:'100%',
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
      <div className={classes.root}>
        <div style={{textAlign:'left'}}>
        <Chip label={this.props.msg} />
        </div>
      </div>
    );
  }}
  export default withStyles(useStyles)(Rec);