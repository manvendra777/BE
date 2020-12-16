import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { Button } from '@material-ui/core';
import Avatar from "@material-ui/core/Avatar";
import rank1 from './Ranks/rank1.png'
import rank2 from './Ranks/rank2.png'
import rank3 from './Ranks/rank3.png'
import rank4 from './Ranks/rank4.png'
import rank5 from './Ranks/rank5.png'
import rank6 from './Ranks/rank6.png'

import gold1 from './Ranks/gold1.png'
import gold2 from './Ranks/gold2.png'
import gold3 from './Ranks/gold3.png'
import gold4 from './Ranks/gold4.png'
import gold5 from './Ranks/gold5.png'
class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            rankImg: '',
            rank: '',
            points: '',
            myProfile: {}
        }
    }
    accept = () => {
        console.log(this.props.id);
        console.log(this.props.job);
        //assignApplicant
        axios.post('http://localhost:8086/forum/job/assignApplicant', null, { params: { applicantId: this.props.id + '', id:this.props.job+'' } }).then(res => {
            console.log(res.data);
            toast.success("Job assigned successfully!", {
                position: "bottom-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }
    getInfo = () => {
        var persons = ''
        axios
            .get(`http://localhost:8082/management/community/profile/` + this.props.id)
            .then((res) => {
                persons = res.data;
                console.log(persons);
                this.setState({ myProfile: persons });
            });
    }
    componentDidMount() {
        this.getGamification()
        this.getInfo()
    }
    getGamification = () => {
        var self = this;
        axios
            .get(
                "http://localhost:8082/management/community/profile/getGamification/" + this.props.id)
            .then(function (response) {
                self.setState({ points: (response.data * 100) % 1000, rank: Math.floor(((response.data) * 100) / 1000) })
                switch (self.state.rank) {
                    case 0:
                        self.setState({ rankImg: rank1 })
                        break;
                    case 1:
                        self.setState({ rankImg: rank2 })
                        break;
                    case 2:
                        self.setState({ rankImg: rank3 })
                        break;
                    case 3:
                        self.setState({ rankImg: rank4 })
                        break;
                    case 4:
                        self.setState({ rankImg: rank5 })
                        break;
                    case 5:
                        self.setState({ rankImg: rank6 })
                        break;
                    case 6:
                        self.setState({ rankImg: gold1 })
                        break;
                    case 7:
                        self.setState({ rankImg: gold2 })
                        break;
                    case 8:
                        self.setState({ rankImg: gold3 })
                        break;
                    case 9:
                        self.setState({ rankImg: gold4 })
                        break;
                    case 10:
                        self.setState({ rankImg: gold5 })
                        break;
                    default:
                        self.setState({ rankImg: gold5 })
                        break;
                }

            });

    }

    render() {
        return (
            <div>
                <Paper elevation={2} style={{ width: '100%', height: 160, padding: '5%', marginTop: '1%', marginBottom: '1%' }}>
                    <div>
                        <Typography color="primary" variant="h6" style={{ margin: '1%', display: 'flex', }} gutterBottom>
                            Name:  {this.state.myProfile.firstName + " " + this.state.myProfile.lastName}
                        </Typography>
                    </div>
                    <div style={{ marginTop: 0, display: 'flex' }}>

                        <Typography color="primary" variant="h6" style={{ margin: '1%', display: 'flex', }} gutterBottom>
                            Rank:
                        </Typography>
                        <Avatar style={{ width: 100 }} variant="square" src={this.state.rankImg}>
                        </Avatar>
                    </div>
                    <div style={{ float: 'right' }}>
                        <Button onClick={this.accept} variant="contained" color="primary">Accept</Button>
                    </div>

                </Paper>
            </div>
        );
    }
}


export default Feedback;