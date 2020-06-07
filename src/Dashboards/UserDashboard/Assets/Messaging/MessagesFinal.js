import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import User from './Assets/User'
import Chip from '@material-ui/core/Chip';
import Sent from './Assets/Messages/Sent'
import Rec from './Assets/Messages/Rec';
import SendMessage from './Assets/SendMessage'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(75),
      height: theme.spacing(80),
    },
  },
  post: {
    margin: theme.spacing(0,1,0,1),
    height:theme.spacing(30),
},
postBox: {
    margin: theme.spacing(1,5,1,2),
    width:theme.spacing(71)
    
},
    hd:{
        margin: theme.spacing(1,1,1,2),
    }
}));

export default function MessagesFinal() {
  const classes = useStyles();
  const [msg,setMsg]=useState([]);
  const [msgTypo,setMsgTypo] = useState('');

  const sendMsg=()=>{
     console.log(msgTypo);
     
      setMsg([...msg,<Sent msg={msgTypo}/>])
      setMsgTypo('');
  }
 
  const recMsg=()=>{
    return <Rec/>
  }
  const handleChane=(e)=>{
      setMsgTypo(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
      <User/>
      <Divider/>
       {msg.map(child=>child)}
      </Paper>
      
    <Paper variant="outlined" className={classes.post}>
        <Typography variant="h6" className={classes.hd}>send</Typography>
              <Divider/>
                      <TextField
                      className={classes.postBox}
                      id="outlined-multiline-static"
                      label="write something here"
                      multiline
                      rows={4}
                      value={msgTypo}
                      defaultValue=""
                      onChange={handleChane}
                      variant="outlined"/>
                      <div className={classes.hd} style={{float:"right"}}>
                          <Button color="primary" onClick={()=>sendMsg()} >Send</Button>
                      </div> 
          </Paper>
      </div>
   
  );
}