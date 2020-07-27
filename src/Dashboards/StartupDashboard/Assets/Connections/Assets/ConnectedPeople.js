import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import Cookies from "js-cookie";
import Grid from '@material-ui/core/Grid'
import InvestorCard from './InvestorCard'
import MentorCard from './MentorCard'
import StartupCard from "../../../../InvestorsDashboard/Assets/Connections/Assets/StartupCard";
import {trackPromise} from 'react-promise-tracker';

const useStyles = (theme)=>({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});


class ConnectedPeople extends Component {

  constructor(props){
    super(props);
    this.state={
      connections: [],
      MentorList: [],
      InvestorList: [],
      userType: ""
    };
    this.getConnection= this.getConnection.bind(this);
  

  }

  componentWillMount(){
    this.getConnection();
    
  }

  getConnection(){
    var myid = Cookies.get('id')
    let mem = [];
    trackPromise(
      axios.get(`http://54.237.17.61/entityAction/user/myConnections`, { params: { id: myid } })
      .then(res => {
        mem = res.data;
        mem.map((item, i) => {
          console.log(item)
          var userType;
          axios
            .get("http://54.237.17.61/security/getTypeById?id=" + item)
            .then((res) => {
              userType = res.data;
              if(userType=="mentor"){
                console.log("mentor")
                this.setState({
                  MentorList: [...this.state.MentorList, <MentorCard id={item}/>]
                })
              }else{
                console.log("investor")
                this.setState({
                  InvestorList: [...this.state.InvestorList, <InvestorCard id={item}/>]
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
       <Typography gutterBottom variant="h5" component="h2">
           Connected Mentors
          </Typography>
          <Divider style={{marginBottom: 5}}/> 
          <div style={{ width: '100%', height: 270, padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
          <div style={{ display: 'flex', overflow: 'auto',background:'#f5f5f5',padding:10 }}>
            <Grid container spacing={0}>
            {this.state.MentorList.map(child => child)}
            </Grid>
            </div></div>
            <Typography gutterBottom variant="h5" component="h2">
           Connected Investor
          </Typography>
          <Divider style={{marginBottom: 5}}/> 
            <div style={{ width: '100%', height: 350, padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
          <div style={{ display: 'flex', overflow: 'auto',background:'#f5f5f5',padding:10 }}>
            <Grid container spacing={0}>
            {this.state.InvestorList.map(child => child)}
            </Grid>
            </div></div>
            </div>
    
  );
}
}

export default withStyles(useStyles)(ConnectedPeople);
