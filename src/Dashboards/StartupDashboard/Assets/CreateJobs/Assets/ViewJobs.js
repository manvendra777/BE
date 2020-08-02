import React, { useState, Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Feedback from './Feedback';
import JobsFeedback from './JobsFeedback'

import { ToastContainer, toast } from 'react-toastify';
const useStyles = theme => ({
  root: {
    width: '84%',
    display: 'flex',
    padding: 2

  },
  input: {
    display: 'none',
  },

});

class ViewJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: {},
      image: null,
      feedback: []
    };
    this.getMyJobs = this.getMyJobs.bind(this)
  }

  showToast=()=>{
    toast.success("connection request sent successfully !", {
      position: "bottom-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
  }

  componentWillMount() {
    this.getMyJobs();
    console.log(this.state.feedback);
  };
  getMyJobs() {
    var self = this;
    var jobs;
    axios.get(`http://50.19.216.143/advert/myAd`, { params: { id: this.props.match.params.id } })
      .then(res => {
        jobs = res.data;
        this.setState({ jobs: jobs });
        this.setState({ image: jobs.image.data })
        jobs.feedbackList.map((item, i) => {
          console.log(item);
          this.setState({ feedback: [...this.state.feedback, <JobsFeedback userId={item.userId} name={item.username} body={item.feedbackBody} />] })
        })
       
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper style={{ width: '40%', height: '100%' }}>
          <div style={{ display: 'flex' ,backgroundColor: '#e8eaf6',}}>
            <Typography variant="h5" color='primary' style={{ margin: 10, }} >{this.state.jobs.header}
            </Typography>
          </div>
          <Divider />

          <div style={{}}>
            <CardMedia
              style={{ height: 300, width: '100%' }}
              image={`data:image/jpeg;base64,${this.state.image}`}
              title="Contemplative Reptile"
            />
            <div style={{ width: '96%', margin: '2%' }}>
              <TextField style={{ width: "100%", height: '100%' }}
                disabled
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue={this.state.jobs.JobDescription}
                variant="outlined"
              />

            </div>
          </div>
        </Paper>



        <div style={{ marginLeft: '1%', width: '50%' }}>
          
          <Paper variant="outlined" style={{}}>
            <div style={{ display: 'flex',backgroundColor: '#e8eaf6', }}>
              <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                Feedback
          </Typography>
            </div>
            <Divider />
            <div>
              {this.state.feedback.map(child => child)}
            </div>

          </Paper>
        </div>
        <ToastContainer
                    position="bottom-right"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
      </div>
    );
  }
}
export default withStyles(useStyles)(ViewJobs);