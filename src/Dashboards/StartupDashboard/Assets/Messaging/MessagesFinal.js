import React, { useState, Component } from 'react';
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
  box: {
    //overflowX:'hidden',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    paddingRight: '17px',
    boxSizing: 'contentBox'
  },
  boxP: {
    width: '100%',
    height: '90%',
    overflow: 'hidden'
  },

  post: {
    margin: theme.spacing(0, 1, 0, 1),
    height: theme.spacing(30),
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
    };
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
    axios.get(`http://localhost:8081/api/message/find`, { params: { senderId: 45332, receiverId: 2364 } })
      .then(res => {
        persons = res.data;
        persons.map((item, i) => {
          if (i > this.state.buffer.length - 1) {
            if (item.senderId == 45332) {
              this.setState({
                msg: [...this.state.msg, <Sent msg={item.text} />]
              })
            } else {
              this.setState({
                msg: [...this.state.msg, <Rec msg={item.text} />]
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
      var sender = '45332';
      var receiver = '2364';
      axios.post('http://localhost:8081/api/message', {
        "senderId": sender,
        "receiverId": receiver,
        "text": this.state.msgTypo
      })
        .then(res => {
        })
      this.recMsg();
    }

  }
  componentDidMount() {
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
      <div className={classes.root}>

        <Paper variant="outlined"  >
          <User id="target" />
          <Divider />
          <div className={classes.boxP}>
            <div className={classes.box}>

              <div ref="messageList">
                {this.state.msg.map(child => child)}
              </div>
            </div>
            <div style={{ float: "left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
        </Paper>
        <Paper variant="outlined" className={classes.post}>
          <Typography variant="h6" className={classes.hd}>send</Typography>
          <Divider />
          <TextField
            className={classes.postBox}
            id="outlined-multiline-static"
            label="write something here"
            multiline
            rows={4}
            value={this.state.msgTypo}
            defaultValue=""
            onChange={handleChane}
            variant="outlined" />
          <div className={classes.hd} style={{ float: "right" }}>
            <Button color="primary" onClick={() => this.sendMsg()} >Send</Button>
          </div>
          <div className={classes.hd} style={{ float: "right" }}>
            <Button color="primary" onClick={() => this.recMsg()} >rec</Button>
          </div>
        </Paper>
      </div>

    );
  }
}
export default withStyles(useStyles)(MessagesFinal);