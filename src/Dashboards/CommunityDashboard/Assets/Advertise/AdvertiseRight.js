import React, { useState, Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie'
import ReactInterval from 'react-interval';
import { Spring } from 'react-spring/renderprops'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = theme => ({
  root: {
    width: "20%",
    position: 'fixed',
    right: 0
  },
  media: {
    height: 340
  },
});

class AdvertiseRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Advert: {},
      image: null,
      feedback: '',
      adId: '',
      show: false,
      adss: true
    };
    this.getAdByDomain = this.getAdByDomain.bind(this)
    this.sendFeedBack = this.sendFeedBack.bind(this)
  }

  componentDidMount() {

  }
  componentWillUnmount() {

  }
  componentWillMount() {

  };


  getAdByDomain() {
    this.setState({ show: false })
    var ads;
    var self = this;
    axios.get(`http://54.237.17.61/advert/getAdByDomain`, { params: { domain: this.props.domain } })
      .then(res => {
        ads = res.data;
        self.setState({ Advert: ads })
        self.setState({ adId: ads.adId })
        self.setState({ image: ads.image.data })
        setTimeout(function () { //Start the timer //After 1 second, set render to true
          self.setState({ show: true })
        }.bind(this),2000)


      })
  }
  keyPress = (e) => {
    if (e.keyCode == 13) {
      this.sendFeedBack()

    }
  }

  sendFeedBack() {
    var self = this;
    axios.post('http://54.237.17.61/advert/addFeedback/', {
      "username": Cookies.get('username'),
      "feedbackBody": self.state.feedback,
      "adId": self.state.adId
    })
      .then(function (response) {
        self.setState({ feedback: '' })
        toast.success("feedback sent successfully !", {
          position: "bottom-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })

      })

  }



  componentWillMount() {
    this.getAdByDomain()
  }

  pauseAds = () => {
    this.setState({ adss: false })
  }

  startAds = () => {
    //this.getAdByDomain()
    this.setState({ adss: true })
  }

  resume = () => {
    setTimeout(function () { //Start the timer //After 1 second, set render to true
      this.startAds()
    }.bind(this), 3000)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ReactInterval timeout={15000} enabled={this.state.adss}
          callback={() => this.getAdByDomain()} />

        <Spring
          from={{ opacity: 0, transform: 'translate3d(100px,0px,0)' }}
          to={{ opacity: this.state.show ? 1 : 0, transform: this.state.show ? 'translate3d(0,0px,0)' : 'translate3d(100px,0px,0)' }}
          config={{ delay: 200 }}>
          {props => <div style={props}>
            <Card onMouseOver={this.pauseAds} onMouseOut={this.startAds} variant="outlined">
              <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                {this.state.Advert.header}
              </Typography>
              <CardMedia
                className={classes.media}
                image={`data:image/jpeg;base64,${this.state.image}`}
                title="Contemplative Reptile"
              />

              <Typography style={{ padding: '2%' }} variant="h5" color="textSecondary" component="p">
                {this.state.Advert.description}
              </Typography>
              <Divider />
              <TextField style={{ margin: 10, width: "100%", paddingRight: 20 }}
                id="outlined-multiline-static"
                label="Feedback"
                value={this.state.feedback}
                rows={2}
                variant="outlined"
                onKeyDown={this.keyPress}
                onChange={(event) => { this.setState({ feedback: event.target.value }) }}
              />

            </Card>
          </div>}
        </Spring>
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
    );
  }
}
export default withStyles(useStyles)(AdvertiseRight);