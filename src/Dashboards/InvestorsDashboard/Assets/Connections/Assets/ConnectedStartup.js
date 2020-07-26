import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import StartupCard from './StartupCard';
import axios from "axios";
import Cookies from "js-cookie";
import Grid from '@material-ui/core/Grid'


const useStyles = (theme)=>({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});


class ConnectedStartup extends Component {

  constructor(props){
    super(props);
    this.state={
      connections: []
    }
    this.getConnection= this.getConnection.bind(this);
  }

  componentWillMount(){
    this.getConnection()
  }

  getConnection(){
    var myid = Cookies.get('id')
    let mem = [];
    axios.get(`http://54.237.17.61/entityAction/user/myConnections`, { params: { id: myid } })
      .then(res => {
        mem = res.data;
        mem.map((item, i) => {
          console.log(item);
          this.setState({ connections:[...this.state.connections, <StartupCard id={item}/>]})
          console.log("called")
        })
      })
      console.log(this.state.connections)
      console.log("called2")
  }
  render() {
  const { classes } = this.props;

  return (
    <div>
       <Typography gutterBottom variant="h5" component="h2">
           Connected Startup
          </Typography>
          <Divider style={{marginBottom: 5}}/> 
          <div style={{ width: '100%', height: 350, padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
          <div style={{ display: 'flex', overflow: 'auto',background:'#bfbfbf',padding:10 }}>
            <Grid container spacing={0}>
            {this.state.connections.map(child => child)}
            </Grid>
            </div></div>
            </div>
    
  );
}
}

export default withStyles(useStyles)(ConnectedStartup);
