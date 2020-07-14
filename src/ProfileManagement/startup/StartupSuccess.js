import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardM from '@material-ui/core/Card';
import Header from './header';
import axios from 'axios';

class StartupSuccess extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        myProfile: [],
        val: [],
        avg: '',
        setReq:false,}
        this.createDb = this.createDb.bind(this)
    };

  createDb(){
    var myid = "5f07ae9d919bc64fc3513d0l";
        var response;
        axios.post('http://localhost:8083/entityAction/user/createRequestDB', null,{ params: { id: myid} })
            .then(res => { 
                response = res.data 
                console.log(response);
            })
  }
  //set Entity for unique ID
  setId(){
    //set entity
  }
  componentDidMount(){
    this.createDb();
    this.setId();
    window.location = "/loginPg"
    
  }
    render(){

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <Header/>
                  <div style={{margin:"auto",width:"40%",marginTop:300,textAlign:"center"}}>
                  <CardM style= {{width: 600, marginTop: 70,padding:20}} elevation={10}> 
                     <h1>Thank You </h1>
                     <p>Your Data Is Submitted</p>
                     </CardM>
                     </div>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupSuccess;