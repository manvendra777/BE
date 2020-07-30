import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie'
import axios from 'axios'
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state={
            msg:''
        }
    }

    keyPress=(e)=> {
        if (e.keyCode == 13) {
          this.sendMsg()
        }
      }

  sendMsg = () => {
    if (this.state.msg != "") {
      this.setState({ msg: '' });
      var sender = Cookies.get('id')
      var receiver = this.props.userId
      axios.post('http://54.237.17.61/communication/message/send', {
        "senderId": sender,
        "receiverId": receiver,
        "text": this.state.msg
      })
        .then(res => {
            console.log(res.data);
            this.setState({msg:''})
        })
    }
  }


    render() {
        return (
            <div>
                <Paper elevation={2} style={{ width: '100%', padding: '5%', marginTop: '1%', marginBottom: '1%' }}>
                    <div>
                        <Typography color="primary" variant="h6" style={{ margin: '1%', display: 'flex', }} gutterBottom>
                            Name: {this.props.name}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" style={{ margin: '1%', display: 'flex', color: '#263238' }} gutterBottom>
                            Feedback: {this.props.body}
                        </Typography>
                    </div>
                    <div>
                        <div style={{ margin: '1%', marginTop:'2%',color: '#263238',width:'100%' }} gutterBottom>
                            <TextField onKeyDown={this.keyPress} onChange={(e)=>{this.setState({msg:e.target.value})}} value={this.state.msg} id="outlined-basic" label="Send note" variant="outlined" />
                        </div>
                    </div>

                </Paper>
            </div>
        );
    }
}


export default Feedback;