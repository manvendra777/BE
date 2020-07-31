import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Cookies from "js-cookie";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  componentWillUnmount() {
    this.onFileUpload();
  }

  onFileChange = (event) => {
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
    //50.19.216.143/management/community/uploadPhoto/5f1373f48888db417a8d0dcc
    const formData = new FormData();
    formData.append("image", this.state.selectedFile);

    console.log(this.state.selectedFile);
    axios({
      method: "post",
      url:
        "http://50.19.216.143/management/community/uploadPhoto/" +
        Cookies.get("tempId"),
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              autoComplete="family-name"
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
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="Email"
              label="Email"
              fullWidth
              type="email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="age"
              name="Age"
              label="Age"
              fullWidth
              type="number"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="intrest"
              name="intrest"
              label="Intrest"
              fullWidth
              onChange={handleChange("interest")}
              defaultValue={values.interest}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="about_me"
              name="about_me"
              label="About Me"
              fullWidth
              onChange={handleChange("about_me")}
              defaultValue={values.about_me}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="employmentCredentials"
              name="employmentCredentials"
              label="Employment Credentials"
              fullWidth
              onChange={handleChange("employmentCredentials")}
              defaultValue={values.employmentCredentials}
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
              onChange={handleChange("postal_code")}
              defaultValue={values.postal_code}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Personal;
