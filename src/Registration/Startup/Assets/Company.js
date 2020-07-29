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

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  continue = (e) => {
    e.preventDefault();
    this.onFileUpload();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div style={{ marginLeft: "25%" }}>
          <p>Organization Logo: {this.state.selectedFile.name}</p>
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
    //54.237.17.61/management/community/uploadPhoto/5f1373f48888db417a8d0dcc
    const formData = new FormData();
    formData.append("image", this.state.selectedFile);

    console.log(this.state.selectedFile);
    axios({
      method: "post",
      url:
        "http://54.237.17.61/management/startup/uploadPhoto/" +
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
          Company Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="companyName"
              label="Company Name"
              fullWidth
              onChange={handleChange("startupName")}
              defaultValue={values.startupName}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            Company Photo
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

          <Grid item xs={12} md={6}>
            <TextField
              required
              id="discription"
              label="Description"
              helperText="Description of your company"
              fullWidth
              onChange={handleChange("startupDescription")}
              defaultValue={values.startupDescription}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              id="website"
              label="Website"
              helperText="Website of your company"
              fullWidth
              onChange={handleChange("websiteURL")}
              defaultValue={values.websiteURL}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="dipp"
              label="Dipp"
              type="number"
              helperText="Dipp number of your company"
              fullWidth
              onChange={handleChange("DIPP_no")}
              defaultValue={values.DIPP_no}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="year_of_foundation"
              label="Year of Foundation"
              fullWidth
              onChange={handleChange("yearOfFoundation")}
              defaultValue={values.yearOfFoundation}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              required
              id="valuation"
              label="Valuation"
              helperText="Valuation of your Startup"
              type="number"
              fullWidth
              onChange={handleChange("valuation")}
              defaultValue={values.valuation}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              required
              id="no_of_people_involved"
              label="Number of people involved in your Startup"
              type="number"
              fullWidth
              onChange={handleChange("noOfPeople")}
              defaultValue={values.noOfPeople}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              required
              id="address"
              label="Address"
              helperText="Address of your company"
              fullWidth
              onChange={handleChange("Address")}
              defaultValue={values.Address}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="city"
              label="City"
              helperText="City where your company is located"
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
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="scope"
              label="Scope/Future Scope"
              helperText="Help us understand scalability of your Startup"
              fullWidth
              onChange={handleChange("futureScope")}
              defaultValue={values.futureScope}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="already_running"
              label="Already Running"
              helperText="Is your Startup already running?(Yes/No)"
              fullWidth
              onChange={handleChange("alreadyRunning")}
              defaultValue={values.alreadyRunning}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Company;
