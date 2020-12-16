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
import Cookies from 'js-cookie'
import SendIcon from '@material-ui/icons/Send';
import photo from './Assets/Messages/img/chat_trans.png'
const useStyles = theme => ({
  root: {
    marginTop: '1%',
    width: '60vmin',
    height: "59vmin"
  },
  r: {

    margin: '1%',
    width: '30%',
    height: "71.5vmin"

  },
  box: {
    overflowX: 'hidden',
    height: '100%',
    overflowY: 'scroll',
    boxSizing: 'contentBox',

  },
  boxP: {
    width: '100%',
    position: 'relative',
    height: '86%',
    overflow: 'hidden',
    background: '#eeeeee',
    marginTop: '1%'
  },
  b: {
    overflowX: 'hidden',
    height: '100%',
    overflowY: 'scroll',
    boxSizing: 'contentBox',

  },
  bP: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',

  },
  post: {
    margin: theme.spacing(2, 1, 0, 1),
    height: theme.spacing(17),
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
      addedUserName: '',
      selected: false,
      addedUserImage:'',
      addedUserType:'',
      sel:'',
      a:'b',
      userSelected: true,
      myId: Cookies.get('id'),
    };
    this.keyPress = this.keyPress.bind(this);
    this.setAddedUser = this.setAddedUser.bind(this)
  }

  setAddedUser = (addedUser, name,type,ima) => {
    this.setState({
      addedUserId: addedUser,
      addedUserName: name,
      addedUserType:type,
      addedUserImage:ima,
      msg: [],
      msgTypo: '',
      buffer: [],
      selected: true,
    })
  }
componentDidUpdate(){
  this.setAddedUser()
}

  getUsers() {
    var myid = Cookies.get('id');
    let mem = [];
    axios.get(`http://localhost:8083/entityAction/user/myConnections`, { params: { id: myid } })
      .then(res => {
        mem = res.data;
        mem.map((item, i) => {
          var id = item;
          axios
            .get("http://localhost:8081/security/getTypeById?id=" + id)
            .then((res) => {
              userType = res.data;
              var persons;
              var userType;
              axios
                .get(
                  `http://localhost:8082/management/` + userType + `/profile/` + id
                )
                .then((res) => {
                  persons = res.data;
                  var self = this;
                  var mem;
                  axios.get(`http://localhost:8082/management/` + userType + `/photos/` + id)
                    .then(res => {
                      mem = res.data;
                      this.setState({ members: [...this.state.members, <Added a={this.state.a} selected={'sle '+i} image={mem} type={userType} name={persons.firstName + ' ' + persons.lastName} id={item} method={this.setAddedUser} />] })
                    })
                });
            });
        })
      })
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      this.sendMsg()
    }
  }
  scrollToBottom = () => {
    if (this.state.selected) {
      const { messageList } = this.refs;
      messageList.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

  }
  recMsg() {
    if (this.state.selected) {
      this.scrollToBottom();
      // Your code here
      let persons = [];
      let up = [];
      axios.get(`http://localhost:8084/communication/message/find`, { params: { senderId: this.state.myId, receiverId: this.state.addedUserId } })
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

  }

  sendMsg = () => {
    if (this.state.msgTypo != "") {
      this.setState({ msgTypo: '' });
      var sender = this.state.myId;
      var receiver = this.state.addedUser;
      axios.post('http://localhost:8084/communication/message/send', {
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
      <div style={{ display: 'flex', height: "100%", width: "60%", position: 'fixed', }}>
        <div className={classes.r}>

          <Paper elevation={2} style={{ backgroundColor: '#e8eaf6', height: '8.5%' }}>
            <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: '2%' }} gutterBottom>
              <center>Inbox</center>
            </Typography>
          </Paper>

          <Paper elevation={2} style={{ height: '100%', marginTop: '0.5%', backgroundColor: '#eeeeee' }}  >
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
        {this.state.selected ? <Paper style={{ backgroundColor: '#eeeeee' }} className={classes.root}>
          <Paper elevation={2} style={{ zIndex: 10, backgroundColor: '#e8eaf6' }}>
            <User show={this.state.selected} style={{ color: '#e8eaf6', }} id={this.state.addedUserId} name={this.state.addedUserName} image={this.state.addedUserImage} type={this.state.addedUserType} />
          </Paper>

          <Paper elevation={2} style={{ height: '120%', marginTop: '-0.5%' }}>
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

            <div elevation={2} style={{ padding: '2%', overflow: 'hidden', display: 'flex', marginTop: '1%', }} >
              <TextField
                style={{ width: '100%', }}
                id="outlined-basic"
                label="write something here"
                value={this.state.msgTypo}
                defaultValue=""
                type="text"
                onChange={handleChane}
                onKeyDown={this.keyPress}
                variant="outlined" />
              <div style={{ float: "right", marginTop: '0%', }}>
                <Button style={{ marginTop: 10 }} color="primary" onClick={() => this.sendMsg()} ><SendIcon /></Button>
              </div>
            </div>
          </Paper>


        </Paper> : <div style={{ padding: '2%' }}><Paper elevation={2} style={{ backgroundColor: '#eeeeee', width: '60vmin', height: '76vmin', display: 'flex' }} >
          <img style={{ width: '100%', marginTop: 'auto', marginBottom: '35%' }} src={photo}></img>
        </Paper></div>}


      </div>
    );
  }
}
export default withStyles(useStyles)(MessagesFinal);