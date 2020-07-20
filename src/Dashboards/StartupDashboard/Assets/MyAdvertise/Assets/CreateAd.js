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
import ViewAd from './ViewAd';
import { spacing } from 'material-ui/styles';
import axios from 'axios'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'js-cookie'

class CreateAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adName: '',
      adDiscription: '',
      domain: 'Other',
      selectedFile: null,
      preview: null,
    }
    this.createAdvertise = this.createAdvertise.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
  }
  createAdvertise() {
    this.onFileUpload();
    this.props.method();
  }

  onFileChange = event => {
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ preview: URL.createObjectURL(event.target.files[0]) })
  };

  setImageName = () => {
    if (this.state.preview) {
      return (<span>{this.state.selectedFile.name}</span>)
    }
  }
  fileData = () => {
    if (this.state.preview) {
      return (
        <div style={{ padding: '1%' }}>
          <CardMedia
            style={{ height: 300, width: '100%' }}
            image={this.state.preview}
            title="Contemplative Reptile"
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: '2%' }}>
          <br />
          <h6> Choose before Pressing the Create button</h6>
        </div>
      );
    }
  };

  onFileUpload = () => {
    //54.237.17.61/community/uploadPhoto/5f1373f48888db417a8d0dcc
    const formData = new FormData();
    formData.append('image', this.state.selectedFile);
    var id;
    console.log(this.state.selectedFile);
   
      
    axios({
      method: 'post',
      url: 'http://54.237.17.61/advert/createAd/',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      id = res.data;
      axios.post('http://54.237.17.61/advert/createAdInfo/',{
        "adId": id,
        "description": this.state.adDiscription,
        "header": this.state.adName,
        "tag": this.state.domain,
        "userId": Cookies.get('id')
      }).then(res => {
        console.log(res.data);
      })
    })
  };


  render() {
    const handleChange = (event) => {
      this.setState({ domain: event.target.value });
    };


    return (
      <Paper variant="outlined">
        <div style={{ display: 'flex' }}>
          <Typography variant="h5" color='primary' style={{ margin: 10 }} >Advertise Name
            </Typography>
          <TextField style={{ width: '50%', margin: 1 }}
            id="outlined-multiline-static"
            variant="outlined"
            onChange={(event) => { this.setState({ adName: event.target.value }) }}
          />
        </div>
        <Divider />
        <input onChange={this.onFileChange} accept="image/*" style={{ display: 'none' }} id="icon-img-file" type="file" />
        <label htmlFor="icon-img-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
          {this.setImageName()}
        </label>
        <Divider />
        <div style={{}}>

          {this.fileData()}

          <div style={{ width: '100%', marginLeft: 'auto' }}>
            <TextField style={{ width: "96%", height: '100%', margin: '2%' }}
              id="outlined-multiline-static"
              label="Discription"
              multiline
              rows={5}
              onChange={(event) => { this.setState({ adDiscription: event.target.value }) }}
              variant="outlined"
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



          <Button style={{ marginLeft: 'auto' }} color="primary" onClick={this.createAdvertise}>Create</Button>
        </div>
        <Divider />
      </Paper>

    );
  }
}


export default CreateAd;