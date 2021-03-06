import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AdvertiseCard from "./Assets/AdvertiseCard";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import PaymentIcon from "@material-ui/icons/Payment";
import Dialog from "@material-ui/core/Dialog";
import CreateAd from "./Assets/CreateAd";
import Pricing from "./Assets/Pricing";
import Cookies from "js-cookie";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Animate from "./Assets/Animate";

import { ToastContainer, toast } from 'react-toastify';
class MyAvertise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
      isPayForeMoreOpen: false,
      AdList: [],
    };
    this.createAd = this.createAd.bind(this);
    this.createPayForMore = this.createPayForMore.bind(this);
    this.getMyAds = this.getMyAds.bind(this);
  }
  createAd() {
    this.setState({ isModelOpen: !this.state.isModelOpen });
  }
  createPayForMore() {
    this.setState({ isPayForeMoreOpen: !this.state.isPayForeMoreOpen });
  }
  componentWillMount() {
    this.getMyAds();
  }
  refreshPage() {
    window.location.reload();
  }

  getMyAds() {
    var ads = [];
    axios
      .get(`http://localhost:8087/advert/getMyAds`, {
        params: { id: Cookies.get("id") },
      })
      .then((res) => {
        ads = res.data;
        ads.map((item, i) => {
          this.setState({
            AdList: [
              ...this.state.AdList,
              <Animate
                id={item.adId}
                tags={item.tags}
                description={item.description}
                image={item.image}
                header={item.header}
                feedbackList={item.feedbackList}
              />,
            ],
          });
        });
      });
  }

  showToast=()=>{
    toast.success("Ad uploaded successfully!", {
      position: "bottom-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })
  }
  render() {
    return (
      <Paper style={{ width: "80%", marginLeft: "2%", height: "100%" }}>
        <Typography variant="h5" color="primary" style={{ padding: "1%", backgroundColor: '#e8eaf6', }}>
          My advertise
        </Typography>
        <Divider />
        <div style={{ marginLeft: "1%", padding: "2%", display: "flex" }}>


          <Fab color='primary' variant="extended" onClick={this.createAd}>
            <AddIcon />
            Create Ad
          </Fab>
          <Dialog open={this.state.isModelOpen} onClose={this.createAd}>
            <CreateAd   method2={this.showToast} refresh={this.refreshPage} method={this.createAd} />
          </Dialog>

          <Fab
            color='primary'
            variant="extended"
            onClick={this.createPayForMore}
            style={{ marginLeft: "3%" }}
          >
            <PaymentIcon />
            Get premium
          </Fab>


          <Dialog
            fullWidth={true}
            maxWidth={"md"}
            open={this.state.isPayForeMoreOpen}
            onClose={this.createPayForMore}
           
          >
            <Pricing method={this.createPayForMore} />
          </Dialog>
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <Typography
              variant="h5"
              color="primary"
              style={{ marginRight: 20 }}
            >
              Ad remaning : 1
            </Typography>
          </div>
        </div>
        <Divider />
        <div>
          <div style={{ height: 550, display: "block", width: "100%" }}>
            <div
              style={{ display: "flex", overflowY: "scroll", height: "100%" }}
            >
              <Grid style={{ marginLeft: 10 }} container spacing={0}>
                {this.state.AdList.map((child) => child)}
              </Grid>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default MyAvertise;
