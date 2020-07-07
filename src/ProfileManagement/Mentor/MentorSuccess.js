import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardM from '@material-ui/core/Card';
import Header from './header';



class MentorSuccess extends React.Component{ 

  componentDidMount(){
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

export default MentorSuccess;