import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import axios from "axios";
import Cookies from "js-cookie";

class Professional extends React.Component {
  constructor(props) {
    super(props);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.state = {
      selectedFile: null,
    };
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div style={{ marginLeft: "25%" }}>
          <p>Photo : {this.state.selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <div style={{ marginLeft: "20%" }}>
          <br />
          <h6>Choose before Pressing the Continue button</h6>
        </div>
      );
    }
  };

  onFileUpload = () => {
    //50.19.216.143/management/community/uploadPhoto/5f1373f48888db417a8d0dcc
    const formData = new FormData();
    formData.append("image", this.state.selectedFile);

    console.log(this.state.selectedFile);
    axios({
      method: "post",
      url:
        "http://50.19.216.143/management/mentor/uploadPhoto/" +
        Cookies.get("tempId"),
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  componentWillUnmount() {
    this.onFileUpload();
  }

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
              id="Experience"
              label="Experience"
              fullWidth
              onChange={handleChange("experience_in_domain")}
              defaultValue={values.experience_in_domain}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            Photo
            <input
              onChange={this.onFileChange}
              accept="image/*"
              style={{ display: "none" }}
              id="icon-img-file"
              type="file"
            />
            <label htmlFor="icon-img-file">
              <IconButton
                style={{ margin: "10%" }}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
          <Grid item xs={12} md={12}>
            {this.fileData()}
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="about_work"
              label="About your previous Work"
              fullWidth
              onChange={handleChange("aboutWork")}
              defaultValue={values.aboutWork}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              id="about_yourself"
              label="About Yourself"
              helperText="About Yourself"
              fullWidth
              onChange={handleChange("about_yourself")}
              defaultValue={values.about_yourself}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              required
              id="address"
              label="Address"
              helperText="Address of your company"
              fullWidth
              onChange={handleChange("address")}
              defaultValue={values.address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="city"
              label="city"
              helperText="City where you live"
              fullWidth
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="state"
              label="State"
              fullWidth
              onChange={handleChange("state")}
              defaultValue={values.state}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="country"
              label="Country"
              fullWidth
              onChange={handleChange("country")}
              defaultValue={values.country}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="postal"
              type="number"
              label="Postal Code"
              fullWidth
              onChange={handleChange("postalCode")}
              defaultValue={values.postalCode}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Professional;
