import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Cookies from "js-cookie";
import Grid from "@material-ui/core/Grid";

import { trackPromise } from "react-promise-tracker";
import Card from "@material-ui/core/Card";

const useStyles = (theme) => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [],
      jobList: [],
      userType: "",
      MyDomain: "",
    };
    //this.getConnection = this.getConnection.bind(this);
  }

  setDomain = (value) => {
    this.setState({ MyDomain: value });
  };

  getJobs() {}

  componentWillMount() {
    //this.getConnection();
  }

  //   getConnection() {
  //     var myid = Cookies.get('id')
  //     let mem = [];
  //     trackPromise(
  //       axios.get(`http://50.19.216.143/entityAction/user/myConnections`, { params: { id: myid } })
  //         .then(res => {
  //           mem = res.data;
  //           mem.map((item, i) => {
  //             console.log(item)
  //             var userType;
  //             axios
  //               .get("http://50.19.216.143/security/getTypeById?id=" + item)
  //               .then((res) => {
  //                 userType = res.data;
  //                 if (userType == "mentor") {
  //                   console.log("mentor")
  //                   this.setState({
  //                     MentorList: [...this.state.MentorList, <AnimateM id={item} />]
  //                   })
  //                 } else {
  //                   console.log("investor")
  //                   this.setState({
  //                     InvestorList: [...this.state.InvestorList, <AnimateI id={item} />]
  //                   })
  //                 }
  //               })
  //           })

  //           console.log(this.state.connections);
  //         })
  //     )

  //   }

  render() {
    const { classes } = this.props;
    console.log(this.state.MyDomain);

    return (
      <div>
        <div style={{ display: "flex", marginLeft: 40 }}>
          <Card
            elevation={2}
            style={{
              width: "80%",
              marginTop: 10,
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              style={{ backgroundColor: "#e8eaf6", padding: 10 }}
            >
              Available Jobs
            </Typography>
            <Divider />
            <div style={{ overflowY: "scroll" }}>
              <Typography style={{ padding: 10, marginLeft: 65 }}>
                Select Domain:
              </Typography>
              <div>
                <Select
                  style={{ width: "40%", marginLeft: 75 }}
                  defaultValue={{ label: "Select Domain", value: 0 }}
                  id="demo-simple-select"
                  value={this.state.MyDomain}
                  onChange={(e) => {
                    this.setDomain(e.target.value);
                  }}
                >
                  <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
                  <MenuItem value={"Artificial Intelligence"}>
                    Artificial Intelligence
                  </MenuItem>
                  <MenuItem value={"Art and Photography"}>
                    Art and Photography
                  </MenuItem>
                  <MenuItem value={"Education"}>Education</MenuItem>
                  <MenuItem value={"Fashion"}>Fashion</MenuItem>
                  <MenuItem value={"Food and Beverages"}>
                    Food and Beverages
                  </MenuItem>
                  <MenuItem value={"Heathcare"}>Healthcare</MenuItem>
                  <MenuItem value={"Marketing"}>Marketing</MenuItem>
                  <MenuItem value={"Sports"}>Sports</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <SearchIcon
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={this.getJobs}
                />
              </div>
              <div style={{ height: 700, display: "block", width: "100%" }}>
                <div
                  style={{
                    background: "#ffffff",

                    height: "100%",
                  }}
                >
                  <div style={{ margin: 40 }}>
                    {this.state.jobList.map((child) => child)}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Jobs);
