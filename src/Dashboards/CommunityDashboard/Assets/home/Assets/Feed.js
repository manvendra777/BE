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
import Advertise from '../../Advertise/Advertise'
import axios from 'axios'
const useStyles = theme => ({

});

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: []
    }
    this.getPosts = this.getPosts.bind(this)
  }
  componentWillMount(){
    this.getPosts();
  }

  getPosts() {
    var ads;
    var self = this;
    axios.get(`http://54.237.17.61/forum/getPostsByDomain/`, { params: { tag:this.props.match.params.Domain } })
      .then(res => {
        ads = res.data;
        console.log(ads);
        ads.map((item, i) => {
          self.setState({ postList: [...self.state.postList, <Post date ={item.dateOfCreation}id={item.discussionId}/>] })
        })
      })
  }



  render() {
    return (
      <div style={{ width: '84%', padding: '1%' }}>
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>{this.props.match.params.Domain}</h1>
          <Divider />
          <CreatePost postDomain={this.props.match.params.Domain} />
          <div style={{ marginTop: '2%' }}>
            {this.state.postList.map(child=>child)}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Feed);