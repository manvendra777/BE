import React, { useState, Component } from "react";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Cookies from "js-cookie";
const useStyles = (theme) => ({
  root: {
    width: "20%",
    right: 0,
    position: "fixed",
    marginRight: 10,
  },
  media: {
    height: 340,
  },
});

class AdvertiseRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Advert: {},
      image: null,
      feedback: "",
      adId: "",
    };
    this.getAdByDomain = this.getAdByDomain.bind(this);
    this.sendFeedBack = this.sendFeedBack.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getAdByDomain();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillMount() {
    this.getAdByDomain();
  }

  getAdByDomain() {
    var ads;
    var self = this;
    axios
      .get(`http://54.237.17.61/advert/getAdByDomain`, {
        params: { domain: this.props.domain },
      })
      .then((res) => {
        ads = res.data;
        self.setState({ Advert: ads });
        self.setState({ adId: ads.adId });
        self.setState({ image: ads.image.data });
      });
  }

  sendFeedBack() {
    var self = this;
    axios
      .post("http://54.237.17.61/advert/addFeedback/", {
        username: Cookies.get("username"),
        feedbackBody: self.state.feedback,
        adId: self.state.adId,
      })
      .then(function (response) {
        self.setState({ feedback: "" });
        console.log(response.data);
        alert(response.data);
      });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card variant="outlined">
          <Typography
            variant="h5"
            color="primary"
            style={{ margin: 10 }}
            gutterBottom
          >
            {this.state.Advert.header}
          </Typography>
          <CardMedia
            className={classes.media}
            image={`data:image/jpeg;base64,${this.state.image}`}
            title="Contemplative Reptile"
          />
          <Typography
            style={{ padding: "2%" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {this.state.Advert.description}
          </Typography>
          <TextField
            style={{ margin: 10, width: "100%", paddingRight: 20 }}
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            value={this.state.feedback}
            rows={4}
            variant="outlined"
            onChange={(event) => {
              this.setState({ feedback: event.target.value });
            }}
          />
          <Divider />
          <div style={{ width: "100%", display: "flex" }}>
            <Button
              onClick={this.sendFeedBack}
              style={{ margin: 10, marginLeft: "auto" }}
            >
              send
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
export default withStyles(useStyles)(AdvertiseRight);
