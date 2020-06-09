import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar } from 'material-ui';



class MentorPersonalInfo extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       this.props.nextStep();
   }
            
        

    render(){

        const {values, handleChange}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                    <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Personal Details</h1>
                    <br/>
                      <TextField
                      hintText= "Enter Firstname"
                      floatingLabelText= "Firstname"
                      onChange= {handleChange('firstName')}
                      defaultValue= {values.firstName}
                      />
                      <br/>
                       <TextField
                      hintText= "Enter Lastname"
                      floatingLabelText= "Lastname"
                      onChange= {handleChange('lastName')}
                      defaultValue= {values.lastName}
                      />
                      
                      <br/>
                       <TextField
                      hintText= "Enter Email Address"
                      floatingLabelText= "Email"
                      type= "email"
                      onChange= {handleChange('email')}
                      defaultValue= {values.email}
                      />
                      <br/>
                       
                       <TextField
                      hintText= "Enter Phone Number"
                      floatingLabelText= "Phone No."
                      type= "number"
                      onChange= {handleChange('phone_no')}
                      defaultValue= {values.phone_no}
                      />
                     <br/>
                      
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                      />
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default MentorPersonalInfo;