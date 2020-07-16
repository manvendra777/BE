import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import Header from './header';
import CardM from '@material-ui/core/Card';
import Cookies from 'js-cookie';



class CommunityConfirm extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       //Api calling
       var data={
        "firstName": this.props.values.firstName,
        "lastName": this.props.values.lastName,
        "interest": this.props.values.interest,
        
}

console.log(data);


     // Code to set the user type.
     const cookieName = document.cookie.split('=')[0]; //username
     const cookieValue = document.cookie.split('=')[1]; //ID
 
     axios.post('http://localhost:8085/security/setCommunity?userName='+cookieName) //Community
     //End of code

axios.put('http://localhost:8082/community/profile/add', {data})
.then(function (response) {

    console.log("true");
})
      Cookies.remove(cookieName);
       this.props.nextStep();
   }

   back= e=>{
    e.preventDefault();
    this.props.prevStep();
}
      
            
        

    render(){

        const {values: {firstName, lastName, interest}}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <Header info="Confirm your Details"/>
                      <div style={{margin:"auto",width:"40%"}}>
                    <CardM style= {{width: 600, marginTop: 70,marginRight:100,marginLeft:100,padding:20,paddingLeft:50}} elevation={10}> 
                     
                     <List>
                         <ListItem
                         primaryText= "First Name:"
                         secondaryText= {firstName}
                          />
                     </List> <List>
                         <ListItem
                         primaryText= "Last Name:"
                         secondaryText= {lastName}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= " Interest"
                         secondaryText= {interest}
                          />
                     </List>
                      
                      <RaisedButton
                        label="Confirm and Continue"
                        primary= {true}
                        onClick= {this.continue}
                      />
                      <RaisedButton
                        label="Back"
                        primary= {false}
                        onClick= {this.back}
                        style={{marginTop:20,marginLeft:20}}
                      />
                      </CardM>
                      </div>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default CommunityConfirm;