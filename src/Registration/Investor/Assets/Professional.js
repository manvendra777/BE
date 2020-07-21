import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import axios from 'axios';
import Cookies from 'js-cookie';


class Company extends React.Component {
  constructor(props) {
    super(props);
    this.onFileUpload = this.onFileUpload.bind(this)
    this.state = {
      selectedFile: null
    }
  };

  componentWillUnmount() {
    this.onFileUpload()
  }


  onFileChange = event => {
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });
  };
  fileData = () => {
    if (this.state.selectedFile) {

      return (
        <div style={{ marginLeft: '25%', }}>
          <p>Organization Logo: {this.state.selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: '20%', }}>
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
      url: 'http://54.237.17.61/management/investor/uploadPhoto/' + Cookies.get('tempId'),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  };
  render() {

    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Professional Details
      </Typography>
        <Grid container spacing={3}>


          <Grid item xs={12} md={6}>
            <TextField
              required
              id="Name"
              label="Name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            Photo :
            <input onChange={this.onFileChange} accept="image/*" style={{ display: 'none' }} id="icon-img-file" type="file" />
            <label htmlFor="icon-img-file">
              <IconButton style={{ margin: '10%' }} color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
          <Grid item xs={12} md={12}>
            {this.fileData()}
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              required
              id="min"
              label="Minimun amount of investment"
              helperText="Minimun investment amount"
              fullWidth
              onChange={handleChange('min')}
              defaultValue={values.min}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              id="max"
              label="Max amount of investment"
              helperText="Max investment amount"
              fullWidth
              onChange={handleChange('max')}
              defaultValue={values.max}
            />
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}
export default Company