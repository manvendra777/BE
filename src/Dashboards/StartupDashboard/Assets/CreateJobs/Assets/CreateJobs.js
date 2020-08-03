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
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ViewAd from './ViewJobs';
import { spacing } from 'material-ui/styles';
import axios from 'axios'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'js-cookie'


class CreateJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle:'',
      jobDescription:'',
      startTime:'',
      budget:'',
      duration:'',
      domain:'',
    }
    
  }
  addGamification = () => {
    axios
      .post(
        "http://50.19.216.143/management/community/profile/addGamification/" + Cookies.get("id"))
      .then(function (response) {
        console.log(response.data);
      });
  }
  createJobs=()=> {
    this.onjobCreate();
    this.props.method2();
  }
  onjobCreate = () => {
    axios.post('http://50.19.216.143/forum/job/createJob', {
      "startupId":Cookies.get('id'),
      "jobTitle":this.state.jobTitle,
      "jobDescription":this.state.jobDescription,
      "startTime":this.state.startTime,
      "budget":this.state.budget,
      "duration":this.state.duration,
      "domain":this.state.domain,
      'worker':' ',
    }).then(res => {
      console.log(res.data);
      this.props.method()
      this.props.refresh()
    })
  };
  render() {
    const handleChange = (event) => {
      this.setState({ domain: event.target.value });
    };


    return (
      <Paper variant="outlined">
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" color='primary' style={{ margin: 10 }} >Job Title
            </Typography>
          <TextField style={{ width: '50%', margin: 1 }}
            id="outlined-multiline-static"
            variant="outlined"
            onChange={(event) => { this.setState({ jobTitle: event.target.value }) }}
          />
        </div>
        <Divider />
        <div style={{}}>
          <div style={{ width: '100%', marginLeft: 'auto' }}>
            <TextField style={{ width: "96%", height: '100%', margin: '2%' }}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={5}
              onChange={(event) => { this.setState({ jobDescription: event.target.value }) }}
              variant="outlined"
            />
            <TextField style={{ width: "96%", height: '100%', margin: '2%' }}
              id="outlined-multiline-static"
              label="Start Date"
              onChange={(event) => { this.setState({ startTime: event.target.value }) }}
            />
            <TextField style={{ width: "96%", height: '100%', margin: '2%' }}
              id="outlined-multiline-static"
              label="Budget"
              onChange={(event) => { this.setState({ budget: event.target.value }) }}
            />
            <TextField style={{ width: "96%", height: '100%', margin: '2%' }}
              id="outlined-multiline-static"
              label="Duration"
              onChange={(event) => { this.setState({ duration: event.target.value }) }}
            />
          </div></div>
        <Divider />
        <div style={{ display: 'flex', padding: '2%' }}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Domain</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.domain}
              onChange={handleChange}
            >
              <MenuItem value={'Agriculture'}>Agriculture</MenuItem>
              <MenuItem value={'Artificial Intelligence'}>Artificial Intelligence</MenuItem>
              <MenuItem value={'Art and Photography'}>Art and Photography</MenuItem>
              <MenuItem value={'Education'}>Education</MenuItem>
              <MenuItem value={'Fashion'}>Fashion</MenuItem>
              <MenuItem value={'Food and Beverages'}>Food and Beverages</MenuItem>
              <MenuItem value={'Heathcare'}>Heathcare</MenuItem>
              <MenuItem value={'Marketing'}>Marketing</MenuItem>
              <MenuItem value={'Sports'}>Sports</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
          </FormControl>
          <Button style={{ marginLeft: 'auto' }} color="primary" onClick={this.createJobs}>Create</Button>
        </div>
        <Divider />

      </Paper>

    );
  }
}


export default CreateJobs;