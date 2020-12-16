import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActionArea from '@material-ui/core/CardActionArea';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Cookies from 'js-cookie'

import { ToastContainer, toast } from 'react-toastify';
class JobsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            status: '',
            title: '#7e57c2',
            sub: '#616161'
        }
    }
    apply = () => {
        var myId = Cookies.get('id')
        //updateApplicant
        console.log();
        axios.post('http://localhost:8086/forum/job/updateApplicant',null, { params: { applicantId: myId+'',id:this.state.id } }).then(res => {
            console.log(res.data);
            toast.success("Comment added successfully!", {
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

    jobStatus = () => {
        if (this.props.isAssigned) {
            this.setState({ status: '#ff9800' })
            this.setState({ title: 'white', sub: '#eeeeee' })
        }
        if (this.props.isComplete) {
            this.setState({ status: '#8bc34a' })
            this.setState({ title: 'white', sub: '#eeeeee' })
        }
    }
    componentWillMount() {
        this.jobStatus()
    }
    render() {
        return (
            <div style={{ margin: 10, width: 355, height: 355 }}>
                <Card elevation={3} style={{ width: '100%', height: '100%', }}>
                    <div style={{ display: 'flex', backgroundColor: this.state.status }}>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: this.state.title }} gutterBottom>
                            Title :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: this.state.sub }} gutterBottom>
                            {this.props.jobTitle}
                        </Typography>
                    </div>


                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            jobDescription :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
                            {this.props.jobDescription}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            startTime :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
                            {this.props.startTime}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            budget :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
                            {this.props.budget}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            duration :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
                            {this.props.duration}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            domain :
                        </Typography>
                        <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
                            {this.props.domain}
                        </Typography>
                    </div>
                    <div style={{ marginLeft: 10, margin: 10, float: 'right', marginTop: 70 }}>
                        <Button onClick={this.apply} variant="contained" color="primary">Apply</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default JobsCard;