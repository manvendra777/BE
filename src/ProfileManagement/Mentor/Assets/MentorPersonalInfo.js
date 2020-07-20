import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar } from 'material-ui';
import Header from './header';
import CardM from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import Cookies from 'js-cookie';


class MentorPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  };
  continue = e => {
    e.preventDefault();
    this.onFileUpload();
    this.props.nextStep();
  }


  onFileChange = event => {
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });
  };
  fileData = () => {
    if (this.state.selectedFile) {

      return (
        <div>
          <p>Organization Logo: {this.state.selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h6>Choose before Pressing the Continue button</h6>
        </div>
      );
    }
  };


  onFileUpload = () => {
    //54.237.17.61/management/community/uploadPhoto/5f1373f48888db417a8d0dcc
    const formData = new FormData();
    formData.append('image', this.state.selectedFile);

    console.log(this.state.selectedFile);
    axios({
      method: 'post',
      url: 'http://54.237.17.61/management/mentor/uploadPhoto/' + Cookies.get('tempId'),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  };


  render() {

    const { values, handleChange } = this.props;

    return (

      <MuiThemeProvider>
        <React.Fragment>
          <Header info="Personal Details" />
          <div style={{ margin: "auto", width: "40%" }}>
            <CardM style={{ width: 400, marginTop: 150, marginRight: 100, marginLeft: 100, padding: 20, paddingLeft: 50 }} elevation={10}>


              <TextField
                hintText="Enter Firstname"
                floatingLabelText="Firstname"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
              <br />
              <TextField
                hintText="Enter Lastname"
                floatingLabelText="Lastname"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
              <input onChange={this.onFileChange} accept="image/*" style={{ display: 'none' }} id="icon-img-file" type="file" />
              <label htmlFor="icon-img-file">
                <IconButton style={{ margin: '10%' }} color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <br />
              {this.fileData()}
              <br />
              <TextField
                hintText="Enter Email Address"
                floatingLabelText="Email"
                type="email"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
              <br />

              <TextField
                hintText="Enter Phone Number"
                floatingLabelText="Phone No."
                type="number"
                onChange={handleChange('phone_no')}
                defaultValue={values.phone_no}
              />
              <br />

              <RaisedButton
                label="Continue"
                primary={true}
                onClick={this.continue}
                style={{ marginTop: 20 }}
              />
               <Button onClick={this.onFileUpload}>ok</Button>
            </CardM>
          </div>
        </React.Fragment>

      </MuiThemeProvider>


    );

  }

}

export default MentorPersonalInfo;