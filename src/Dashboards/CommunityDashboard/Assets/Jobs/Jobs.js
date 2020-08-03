import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Cookies from "js-cookie";
import Grid from "@material-ui/core/Grid";
import { ToastContainer, toast } from 'react-toastify';
import { trackPromise } from "react-promise-tracker";
import Card from "@material-ui/core/Card";
import Animate from './Animate'
import AnimateM from './AnimateM'
import Button from '@material-ui/core/Button'
const useStyles = (theme) => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],
      jobsList: [],
      userType: "",
      MyDomain: "",
      MyJobsList:[]
    };
    //this.getConnection = this.getConnection.bind(this);
  }

  setDomain = (value) => {
    this.setState({ MyDomain: value });
  };
  getMyJobs=()=>{
    //getMyCJobs
    var jobs = [];
    this.setState({ jobsList: [] })
    axios
      .get(`http://50.19.216.143/forum/job/getMyCJobs`, {
        params: { id: Cookies.get('id') },
      })
      .then((res) => {
        jobs = res.data;
        console.log(jobs);
        jobs.map((item, i) => {
          this.setState({
            MyJobsList: [
              ...this.state.MyJobsList,
              <AnimateM id={item.id} jobTitle={item.jobTitle} jobDescription={item.jobDescription} startTime={item.startTime} budget={item.budget} duration={item.duration} domain={item.domain} isComplete={item.isComplete} isAssigned={item.isAssigned} />,
            ],
          });
        });
      });
  }

  getJobs = () => {
    var jobs = [];
    this.setState({ jobsList: [] })
    axios
      .get(`http://50.19.216.143/forum/job/getJob`, {
        params: { domain: this.state.MyDomain },
      })
      .then((res) => {
        jobs = res.data;
        console.log(jobs);
        jobs.map((item, i) => {
          this.setState({
            jobsList: [
              ...this.state.jobsList,
              <Animate id={item.id} jobTitle={item.jobTitle} jobDescription={item.jobDescription} startTime={item.startTime} budget={item.budget} duration={item.duration} domain={item.domain} isComplete={item.isComplete} isAssigned={item.isAssigned} />,
            ],
          });
        });
      });
  }

  componentWillMount() {
    this.getJobs();
    this.getMyJobs()
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.MyDomain);

    return (
      <div>
 <div style={{ display: "flex", marginLeft: 40 }}>
          <Card
            elevation={2}
            style={{
              width: "70%",
              marginLeft:'6%',
              marginTop: 10,
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              style={{ backgroundColor: "#e8eaf6", padding: 10 }}
            >
              My Jobs
            </Typography>
            <Divider />
            <div style={{ overflowY: "scroll" }}>
              <div style={{ height: 400, display: "block", width: "100%" }}>
                <div
                  style={{
                    background: "#ffffff",

                    height: "100%",
                  }}
                >
                  <div style={{ margin: 40 }}>
                    <Grid style={{ marginLeft: 10 }} container spacing={0}>
                      {this.state.MyJobsList.map((child) => child)}
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>












        <div style={{ display: "flex", marginLeft: 40 }}>
          <Card
            elevation={2}
            style={{
              width: "70%",
              marginLeft:'6%',
              marginTop: 10,
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              style={{ backgroundColor: "#e8eaf6", padding: 10 }}
            >
              Available Jobs
            </Typography>
            <Divider />
            <div style={{ overflowY: "scroll"}}>
              <Typography style={{ padding: 10, margin: 20 }}>
                Select Domain:
              </Typography>
              <div> 
                <Select
                  style={{ width: "40%", marginLeft: 75 }}
                  defaultValue={{ label: "Select Domain", value: 0 }}
                  id="demo-simple-select"
                  value={this.state.MyDomain}
                  onChange={(e) => {
                    this.setDomain(e.target.value);
                  }}
                >
                  <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
                  <MenuItem value={"Artificial Intelligence"}>
                    Artificial Intelligence
                  </MenuItem>
                  <MenuItem value={"Art and Photography"}>
                    Art and Photography
                  </MenuItem>
                  <MenuItem value={"Education"}>Education</MenuItem>
                  <MenuItem value={"Fashion"}>Fashion</MenuItem>
                  <MenuItem value={"Food and Beverages"}>
                    Food and Beverages
                  </MenuItem>
                  <MenuItem value={"Heathcare"}>Healthcare</MenuItem>
                  <MenuItem value={"Marketing"}>Marketing</MenuItem>
                  <MenuItem value={"Sports"}>Sports</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <Button>
                <SearchIcon
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={this.getJobs}
                /></Button>
                    <Divider/>
              </div>
          
              <div style={{ height: 500, display: "block", width: "100%" }}>
                <div
                  style={{
                    background: "#ffffff",

                    height: "100%",
                  }}
                >
                  <div style={{ margin: 40 }}>
                    <Grid style={{ marginLeft: 10 }} container spacing={0}>
                      {this.state.jobsList.map((child) => child)}
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
       
      </div>
    );
  }
}

export default withStyles(useStyles)(Jobs);
