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
import AnimateFeedback from './AnimateFeedback'
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
      jobDescription: '',
      jobTitle: '',
      startTime: '',
      budget: '',
      duration: '',
      domain: '',
      isComplete: false,
      applicants: [],
      isAssigned: false,
      jobId: this.props.match.params.id
    };

  }

  showToast = () => {
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
  };
  getMyJobs = () => {
    var jobs = []
    console.log(this.props.match.params.id);
    axios
      .get(`http://50.19.216.143/forum/job/getJobById`, {
        params: { id: this.props.match.params.id },
      })
      .then((res) => {
        jobs = res.data;
        console.log(jobs);
        this.setState({ jobDescription: jobs.jobDescription, jobTitle: jobs.jobTitle, startTime: jobs.startTime, budget: jobs.budget, duration: jobs.duration, domain: jobs.domain, isAssigned: jobs.isAssigned, isComplete: jobs.isComplete })
        jobs.applicants.map((item, i) => {
          this.setState({ applicants: [...this.state.applicants, <AnimateFeedback id={item} job={this.state.jobId} />] })
        })
        this.jobStatus()
      });
  }
  jobStatus = () => {
    if (this.state.isAssigned) {
      this.setState({ status: '#ff9800' })
      this.setState({ title: 'white', sub: '#eeeeee' })
    }
    if (this.state.isComplete) {
      this.setState({ status: '#8bc34a' })
      this.setState({ title: 'white', sub: '#eeeeee' })
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper style={{ width: '40%', height: '100%' }}>
          <div style={{ display: 'flex', backgroundColor: this.state.status }}>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: this.state.title }} gutterBottom>
              Title :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: this.state.sub }} gutterBottom>
              {this.state.jobTitle}
            </Typography>
          </div>
          <Divider />
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
              jobDescription :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
              {this.state.jobDescription}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
              startTime :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
              {this.state.startTime}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
              budget :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
              {this.state.budget}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
              duration :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
              {this.state.duration}
            </Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
              domain :
                        </Typography>
            <Typography variant="h5" style={{ margin: '1%', display: 'flex', color: '#616161' }} gutterBottom>
              {this.state.domain}
            </Typography>
          </div>
        </Paper>
        <div style={{ marginLeft: '1%', width: '50%' }}>
          <Paper variant="outlined" style={{}}>
            <div style={{ display: 'flex', backgroundColor: '#e8eaf6', }}>
              <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                Applicants
          </Typography>
            </div>
            <Divider />
            <div>
              {this.state.applicants.map(child => child)}
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