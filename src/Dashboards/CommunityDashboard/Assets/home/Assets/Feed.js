import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Button } from 'react-bootstrap';
import CreatePost from './CreatePost'
import Post from './Post'
import Divider from '@material-ui/core/Divider';

const useStyles = theme => ({

});

class Feed extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ width: '84%', padding: '1%' }}>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>{this.props.match.params.Domain}</h1>
          <Divider />
          <CreatePost />
          <div style={{ marginTop: '2%' }}>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Feed);