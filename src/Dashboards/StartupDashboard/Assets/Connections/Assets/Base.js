import React, { useState , updateState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import List from '@material-ui/core/List';
import Invitation from "./Invitation"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
  hd: {
    margin: theme.spacing(1,1,1,2),
},
listSection:{
  width: "100%",
  height: "100%",
    overflowY: "scroll",
    paddingRight: "17px",/* Increase/decrease this value for cross-browser compatibility */
    boxSizing: "content-box" /* So the width will be 100% + 17px */
},
notiList:{
  width: "100%",
    height: "92%",
    overflow: "hidden",
}
}));


export default function Base(props) {
  const classes = useStyles();
  const [invitations,setInvitations]=useState([]);

  const rem=()=>{
    props.m();
  }
  
  React.useEffect(() => {
    // Your code here
    let req=[];
    axios.get(`http://localhost:8080/user/pendingRequests`,{params: {id: 1}})
    .then(res => {
      req = res.data;
      console.log(req)
      req.map((item,i)=>{
        console.log(item);
        setInvitations(invitations=>[...invitations,<Invitation name={item} id={item} seq={i} de={rem} invs={invitations}/>])
      })
    })
  },[]);

 

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <div className={classes.hd}>
                <Typography variant="h6" >Your Invitation</Typography>
            </div>
            <Divider />
            <Divider/>
            <div className={classes.notiList}>

            <List className={classes.listSection}>
            {invitations.map(child=>child)}
            </List>
            </div>
        </Paper>
    </div>
  );
}
