import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Cookies from "js-cookie";
import Grid from '@material-ui/core/Grid'
import StartupCard from "../../../../InvestorsDashboard/Assets/Connections/Assets/StartupCard";
import { trackPromise } from 'react-promise-tracker';
import Card from '@material-ui/core/Card'

import AnimateM from './Assets/Mentor/Animate'
import AnimateI from './Assets/Investor/Animate'
const useStyles = (theme) => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});


class ConnectedPeople extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connections: [],
      MentorList: [],
      InvestorList: [],
      userType: ""
    };
    this.getConnection = this.getConnection.bind(this);


  }

  componentWillMount() {
    this.getConnection();

  }

  getConnection() {
    var myid = Cookies.get('id')
    let mem = [];
    trackPromise(
      axios.get(`http://50.19.216.143/entityAction/user/myConnections`, { params: { id: myid } })
        .then(res => {
          mem = res.data;
          mem.map((item, i) => {
            console.log(item)
            var userType;
            axios
              .get("http://50.19.216.143/security/getTypeById?id=" + item)
              .then((res) => {
                userType = res.data;
                if (userType == "mentor") {
                  console.log("mentor")
                  this.setState({
                    MentorList: [...this.state.MentorList, <AnimateM id={item} />]
                  })
                } else {
                  console.log("investor")
                  this.setState({
                    InvestorList: [...this.state.InvestorList, <AnimateI id={item} />]
                  })
                }
              })
          })

          console.log(this.state.connections);
        })
    )

  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Card elevation={2} style={{ width: '50%', marginTop: 10, margin: 4 }}>
            <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} >
              My Mentors
							</Typography>
            <Divider />
            <div style={{ height: 700, display: 'block', width: '100%' }}>
              <div style={{ background: '#ffffff', overflowY: 'scroll', height: '100%' }}>
                <div style={{ margin: 40 }}>
                   {this.state.MentorList.map(child => child)}
                </div>
              </div>
            </div>
          </Card>
          <Card elevation={2} style={{ width: '50%', marginTop: 10, margin: 4 }}>
            <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} >
              My Investors
							</Typography>
            <Divider />
            <div style={{ height: 700, display: 'block', width: '100%' }}>
              <div style={{ background: '#ffffff', overflowY: 'scroll', height: '100%' }}>
                <div style={{ margin: 40 }}>
                  {this.state.InvestorList.map(child => child)}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ConnectedPeople);
