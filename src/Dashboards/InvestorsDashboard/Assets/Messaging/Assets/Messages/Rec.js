import Chip from '@material-ui/core/Chip';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Card } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops'
const useStyles = theme => ({
  root: {
    width: '100%',
    marginTop: 7,
    marginBottom: 7,
  },
});

class Rec extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currComponent: '4'
    };
  }

  render() {
    const { classes } = this.props;
    return (

      <Spring
        from={{ opacity: 0, transform:
          'translate3d(0,200px,0)', }}
        to={{ opacity: 1, transform:
          'translate3d(0px,0,0)', }}>
        {props => <div style={props}><div style={{ marginRight: '40%', marginBottom: 10, marginTop: 10 }}><Card elevation={2} style={{ color: '#435a7b', background: '#FFFFFF', marginTop: 5, marginBottom: 5, textAlign: 'left', padding: 7, paddingLeft: 25, borderBottomLeftRadius: 25, borderTopRightRadius: 25, borderBottomRightRadius: 25, }}>{this.props.msg}</Card></div> </div>}
      </Spring>


      
      );
  }
}
export default withStyles(useStyles)(Rec);