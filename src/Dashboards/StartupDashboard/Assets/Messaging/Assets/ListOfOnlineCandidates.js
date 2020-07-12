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
const useStyles = theme => ({
  root: {
    width: '15%',
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
			members:[]
		};
  }
  
  componentWillMount(){
    // Your code here
    var myid="5f07ae9d919bc64fc3513d0c"
    let mem=[];
    axios.get(`http://localhost:8083/entityAction/user/myConnections`,{params: {id: myid}})
    .then(res => {
      mem = res.data;
      mem.map((item,i)=>{
        console.log(item);
        this.setState({members:[...this.state.members,<User id={item}/>]})
      })
    })
  };


  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Card className={classes.root} variant="outlined">
      <Typography variant="h6" className={classes.hd}>Members</Typography>
      <Divider/>
      <div style={{width:'100%',height:'100%',overflow:'hidden'}}>
      <div style={{overflowY: "auto",width:'100%',height:'100%',paddingRight:'15px',paddingLeft:'0px'}}>
      <List component="nav" aria-label="main mailbox folders" >
      {this.state.members.map(child=>child)}
      </List>
      </div>
      </div>

      </Card>
    </div>
  );
}
}
export default withStyles(useStyles)(ListOfOnlineCandidates);

