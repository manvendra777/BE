import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar } from 'material-ui';
import Header from './header';
import CardM from '@material-ui/core/Card';


class StartupPersonalInfo extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       this.props.nextStep();
   }
            
        

    render(){

        const {values, handleChange}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                    <Header info="Personal Details"/>
                    <div style={{margin:"auto",width:"40%"}}>
                    <CardM style= {{width: 400, marginTop: 150,marginRight:100,marginLeft:100,padding:20,paddingLeft:50}} elevation={10}> 
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
                      hintText= "Enter Age"
                      floatingLabelText= "Age"
                      type= "number"
                      onChange= {handleChange('age')}
                      defaultValue= {values.age}
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
                      hintText= "Enter Highest Qualification"
                      floatingLabelText= "Highest Qualification"
                      onChange= {handleChange('qualification')}
                      defaultValue= {values.qualification}
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
                        style={{marginTop:20}}
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                      />
                     </CardM>
                      </div>
                     
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupPersonalInfo;