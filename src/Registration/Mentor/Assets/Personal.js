import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Personal extends React.Component {
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
              id="phone"
              name="Phone"
              label="Phone"
              fullWidth
              type="number"
              onChange={handleChange("phone_no")}
              defaultValue={values.phone_no}
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
              id="higgestQualification"
              name="Higgest Qualification"
              label="Highest Qualification"
              fullWidth
              onChange={handleChange("qualification")}
              defaultValue={values.qualification}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="profession"
              name="Profession"
              label="Profession"
              fullWidth
              onChange={handleChange("profession")}
              defaultValue={values.profession}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Personal;
