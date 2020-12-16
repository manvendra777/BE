import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import Cookies from 'js-cookie'
import SendIcon from '@material-ui/icons/Send';
import photo from './chat_trans.png'
import Added from './Added'
const useStyles = theme => ({
    root: {
        marginTop: '1%',
        width: '60vmin',
        height: "78vmin"
    },
    r: {
        margin: '1%',
        width: '40%',
        height: "71.5vmin",
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
class Inbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: [],
            myId: Cookies.get('id'),
            members: [],
            selected: false,
            startName: '',
            text: ''
        };

    }

    componentWillMount() {
        this.getUsers()
    }

    setAddedUser = (startupName, text) => {
        this.setState({
            selected: true,
            startName: startupName,
            msgL: text
        })
    }

    getUsers() {
        axios.get(`http://localhost:8084/communication/message/getMails`, { params: { senderId: this.state.myId } })
            .then(res => {
                var persons = res.data.reverse();
                console.log(persons);
                persons.map((item, i) => {
                    axios.get("http://localhost:8081/security/getTypeById?id=" + item.senderId).then((res) => {
                        var userType = res.data;
                        axios.get(`http://localhost:8082/management/startup/profile/` + item.senderId).then((res) => {
                            var data = res.data;
                            this.setState({ members: [...this.state.members, <Added name={data.startupName} founder={data.firstName + ' ' + data.lastName} method={this.setAddedUser} text={item.text} />] })
                        });
                    });
                })
            })
    }


    /* var myid = Cookies.get('id');
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
                                 console.log(persons);
                                 this.setState({ members: [...this.state.members, <Added name={persons.firstName + ' ' + persons.lastName} id={item} method={this.setAddedUser} />] })
                             });
                     });
             })
         })*/




    /*
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
    
    }*/



    componentDidMount() {
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidUpdate() {
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ display: 'flex', height: "90%", width: "56%", position: 'fixed', marginLeft: '4.5%' }}>

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
                        </div>
                    </Paper>
                </div>
                {
                    this.state.selected ?
                        <Paper style={{ backgroundColor: '#eeeeee' }} className={classes.root}>
                            <Paper elevation={2} style={{ zIndex: 10, backgroundColor: '#e8eaf6', padding: 20 }}>
                                <div>
                                    From : {this.state.startName}
                                </div>
                            </Paper>
                            <div >
                                <Paper style={{ padding: 25, marginTop: 5 }}>
                                    mail : {this.state.msgL}
                                </Paper>
                            </div>
                        </Paper> : <div style={{ padding: '2%' }}><Paper elevation={2} style={{ backgroundColor: '#eeeeee', width: '60vmin', height: '76vmin', display: 'flex' }} >
                            <img style={{ width: '100%', marginTop: 'auto', marginBottom: '35%' }} src={photo}></img>
                        </Paper></div>}
            </div>
        );
    }
}
export default withStyles(useStyles)(Inbox);