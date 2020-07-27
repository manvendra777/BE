import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { render } from "@testing-library/react";
import { Avatar } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
    fontFamily: "Special Elite",
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
});

class OutlinedCard extends Component {
  constructor(props) {
    super(props);
  }

  //const {bull} = <span className={classes.bullet}>•</span>;
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} variant="outlined">
        <Card>
          <div>
            <CardContent>
              <div className={classes.title} color="textSecondary" gutterBottom>
                <Typography
                  style={{
                    fontFamily: "Special Elite",
                    textAlign: "center",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Developers
                </Typography>
              </div>
              <Grid container direction="row">
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "5%",
                    marginBottom: "2%",
                    fontSize: "10",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/sanket.png"
                      className={classes.large}
                    />
                    Sanket Tupe
                  </Typography>
                </div>
                <div
                  style={{
                    marginRight: "5%",
                    marginBottom: "2%",
                    fontSize: "1",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/manvendra.png"
                      className={classes.large}
                    />
                    Manvendra Chavan
                  </Typography>
                </div>

                <div
                  style={{
                    marginRight: "5%",
                    marginBottom: "2%",
                    fontSize: "10",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/chaitrali.png"
                      className={classes.large}
                    />
                    Chaitrali Shinde
                  </Typography>
                </div>
                <div
                  style={{
                    marginRight: "5%",
                    marginBottom: "2%",
                    fontSize: "10",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/shubhankar.jpeg"
                      className={classes.large}
                    />
                    Shubhankar Deshmukh
                  </Typography>
                </div>
                <div
                  style={{
                    marginRight: "5%",
                    marginBottom: "2%",
                    fontSize: "10",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/harshal.jpg"
                      className={classes.large}
                    />
                    Harshal Sabale
                  </Typography>
                </div>
                <div style={{ marginRight: "auto", fontSize: "10" }}>
                  <Typography>
                    <Avatar
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "2%",
                      }}
                      src="assets/daksh.png"
                      className={classes.large}
                    />
                    Daksh Chaudhary
                  </Typography>
                </div>
              </Grid>
              <Divider />
              <div className={classes.title} color="textSecondary" gutterBottom>
                <Typography
                  style={{
                    fontFamily: "Special Elite",
                    textAlign: "center",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Mentors
                </Typography>
              </div>
              <Grid container direction="row">
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "5%",
                    marginBottom: "3%",
                    fontSize: "10",
                  }}
                >
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/nageshsir.jpeg"
                      className={classes.large}
                    />
                    Nagesh Salunke
                  </Typography>
                </div>

                <div style={{ marginRight: "auto", fontSize: "10" }}>
                  <Typography>
                    <Avatar
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      src="assets/santoshsir.jfif"
                      className={classes.large}
                    />
                    Santosh Nagargoje
                  </Typography>
                </div>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(OutlinedCard);
