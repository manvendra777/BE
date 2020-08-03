import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PaymentIcon from "@material-ui/icons/Payment";
import Dialog from "@material-ui/core/Dialog";
import CreateJobs from "./Assets/CreateJobs";
import Cookies from "js-cookie";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Animate from "./Assets/Animate";

import { ToastContainer, toast } from 'react-toastify';
class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
      isPayForeMoreOpen: false,
      JobsList: [],
    };
    this.createJobs = this.createJobs.bind(this);
    this.getMyJobs = this.getMyJobs.bind(this);
  }
  createJobs() {
    this.setState({ isModelOpen: !this.state.isModelOpen });
  }
 
  componentWillMount() {
    this.getMyJobs();
  }
  refreshPage() {
    window.location.reload();
  }

  getMyJobs() {
    var jobs = [];
    axios
      .get(`http://50.19.216.143/forum/job/getMyJobs`, {
        params: { id: Cookies.get("id") },
      })
      .then((res) => {
        jobs = res.data;
        console.log(jobs);
       jobs.map((item, i) => {
          this.setState({
            JobsList: [
              ...this.state.JobsList,
              <Animate id={item.id} jobTitle={item.jobTitle} jobDescription={item.jobDescription} startTime={item.startTime} budget={item.budget} duration={item.duration} domain={item.domain} isComplete={item.isComplete} isAssigned={item.isAssigned}/>,
            ],
          });
        });
      });
  }

  showToast=()=>{
    toast.success("Ad uploaded successfully!", {
      position: "bottom-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
  }
  render() {
    return (
      <Paper style={{ width: "80%", marginLeft: "2%", height: "100%" }}>
        <Typography variant="h5" color="primary" style={{ padding: "1%", backgroundColor: '#e8eaf6', }}>
          My Jobs
        </Typography>
        <Divider />
        <div style={{ marginLeft: "1%", padding: "2%", display: "flex" }}>


          <Fab color='primary' variant="extended" onClick={this.createJobs}>
            <AddIcon />
            Create Jobs
          </Fab>
          <Dialog open={this.state.isModelOpen} onClose={this.createJobs}>
            <CreateJobs   method2={this.showToast} refresh={this.refreshPage} method={this.createJobs} />
          </Dialog>

        </div>
        <Divider />
        <div>
          <div style={{ height: 550, display: "block", width: "100%" }}>
            <div
              style={{ display: "flex", overflowY: "scroll", height: "100%" }}
            >
              <Grid style={{ marginLeft: 10 }} container spacing={0}>
                {this.state.JobsList.map((child) => child)}
              </Grid>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default MyJobs;
