import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import User from './Assets/User'
import Added from './Assets/Added'
import Chip from '@material-ui/core/Chip';
import Sent from './Assets/Messages/Sent'
import Rec from './Assets/Messages/Rec';
import SendMessage from './Assets/SendMessage'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";


const useStyles = theme => ({
  root: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(75),
      height: theme.spacing(80),
    },
  },
  r: {
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(99),
    },
  },
  box: {
    overflowX: 'hidden',
    height: '100%',
    overflowY: 'scroll',
    boxSizing: 'contentBox',

  },
  boxP: {
    width: '100%',
    height: '91.1%',
    overflow: 'hidden',
    background: '#e5eaea'
  },
  b: {
    overflowX: 'hidden',
    height: '100%',
    overflowY: 'scroll',
    boxSizing: 'contentBox',

  },
  bP: {
    width: '100%',
    height: '96.5%',
    overflow: 'hidden',

  },
  post: {
    margin: theme.spacing(2, 1, 0, 1),
    height: theme.spacing(17),
  },
  postBox: {
    margin: theme.spacing(1, 5, 1, 2),
    width: theme.spacing(71)

  },
  hd: {
    margin: theme.spacing(1, 1, 1, 2),
  }
});
class MessagesFinal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: [],
      msgTypo: '',
      buffer: [],
      members: [],
      addedUserId: '',
      myId: 2
    };
    this.keyPress = this.keyPress.bind(this);
    this.setAddedUser = this.setAddedUser.bind(this)
  }

  setAddedUser = (addedUser) => {
    this.setState({
      addedUserId: addedUser,
      msg: [],
      msgTypo: '',
      buffer: [],
    })
  }


  getUsers() {
    var myid = "5f07ae9d919bc64fc3513d0c"
    let mem = [];
    axios.get(`http://localhost:8083/entityAction/user/myConnections`, { params: { id: myid } })
      .then(res => {
        mem = res.data;
        mem.map((item, i) => {
          console.log(item);
          this.setState({ members: [...this.state.members, <Added id={item} method={this.setAddedUser} />] })
          if(i==0){
            this.setState({addedUserId:item})
          }
        })
      })
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      this.sendMsg()
    }
  }
  scrollToBottom = () => {
    const { messageList } = this.refs;
    messageList.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  recMsg() {
    this.scrollToBottom();
    // Your code here
    let persons = [];
    let up = [];
    axios.get(`http://localhost:8080/communication/message/find`, { params: { senderId: this.state.myId, receiverId: this.state.addedUserId } })
      .then(res => {
        persons = res.data;
        persons.map((item, i) => {
          if (i > this.state.buffer.length - 1) {
            if (item.senderId == this.state.myId) {
              this.setState({
                msg: [...this.state.msg, <Sent msg={item.text} time={new Date(item.timestamp)} />]
              })
            } else {
              this.setState({
                msg: [...this.state.msg, <Rec msg={item.text} time={new Date(item.timestamp)} />]
              })
            }
          }
        })
        this.setState({ buffer: persons })
      })
  }

  sendMsg = () => {
    if (this.state.msgTypo != "") {
      this.setState({ msgTypo: '' });
      var sender = this.state.myId;
      var receiver = this.state.addedUser;
      axios.post('http://localhost:8080/communication/message/send', {
        "senderId": sender,
        "receiverId": this.state.addedUserId,
        "text": this.state.msgTypo
      })
        .then(res => {
        })
      this.recMsg();
    }
  }
  componentDidMount() {
   
    this.getUsers();
    this.recMsg();
    this.interval = setInterval(() => {
      this.recMsg();
    }, 1000);
    this.scrollToBottom();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { classes } = this.props;

    const handleChane = (e) => {
      this.setState({ msgTypo: e.target.value });
    }
    return (
      <div style={{ display: 'flex' }}>
        <div className={classes.r}>
          <Paper elevation={5}  >
            All message
          <Divider />
            <div className={classes.bP}>
              <div className={classes.b}>
                {this.state.members.map(child => child)}
              </div>
              <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>
            </div>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper elevation={5}  >
            <User id={this.state.addedUserId} />
            <Divider />
            <div className={classes.boxP}>
              <div className={classes.box}>
                <div ref="messageList">
                  <div style={{ padding: 20, displat: 'flex' }}>
                    {this.state.msg.map(child => child)}
                  </div>
                </div>
              </div>
              <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>
            </div>
          </Paper>
          <Paper elevation={5} className={classes.post}>
            <TextField
              style={{ marginTop: 17 }}
              className={classes.postBox}
              id="outlined-basic"
              label="write something here"
              rows={4}
              value={this.state.msgTypo}
              defaultValue=""
              type="text"
              onChange={handleChane}
              onKeyDown={this.keyPress}
              variant="outlined" />
            <div className={classes.hd} style={{ float: "right" }}>
              <Button color="primary" onClick={() => this.sendMsg()} >Send</Button>
            </div>
          </Paper>
        </div>

      </div>
    );
  }
}
export default withStyles(useStyles)(MessagesFinal);