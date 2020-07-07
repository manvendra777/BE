import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar } from 'material-ui';
import Header from './header';
import CardM from '@material-ui/core/Card';


class CommunityPersonalInfo extends React.Component{ 

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
                      hintText= "Enter Interest"
                      floatingLabelText= "Interest"
                      onChange= {handleChange('interest')}
                      defaultValue= {values.interest}
                      />
                    
                     <br/>
                      
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                        style={{marginTop:20}}
                      />
                      </CardM>
                      </div>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default CommunityPersonalInfo;