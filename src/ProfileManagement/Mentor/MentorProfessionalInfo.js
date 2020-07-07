import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header';
import CardM from '@material-ui/core/Card';


class MentorProfessionalInfo extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       this.props.nextStep();
   }
   back= e=>{
    e.preventDefault();
    this.props.prevStep();
}
            
        

    render(){

        const {values, handleChange}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <Header info="Professional Details"/>
                    <div style={{margin:"auto",width:"40%"}}>
                    <CardM style= {{width: 400,marginTop: 80,marginRight:100,marginLeft:100,padding:10,paddingLeft:50}} elevation={10}> 
                      
                      <TextField
                      hintText= "Enter qualification"
                      floatingLabelText= "Qualification"
                      onChange= {handleChange('qualification')}
                      defaultValue= {values.qualification}
                      />
                         <br/>
                       <TextField
                      hintText= "Enter Experience in Domain"
                      floatingLabelText= "Experience"
                      onChange= {handleChange('experience_in_Domain')}
                      defaultValue= {values.experience_in_Domain}
                      />
                         <br/>
                       <TextField
                      hintText= "Enter Method of Contact"
                      floatingLabelText= "Contact"
                      type= "number"
                      onChange= {handleChange('method_of_contact')}
                      defaultValue= {values.method_of_contact}
                      />   <br/>
                       <TextField
                      hintText= "What makes you a great mentor"
                      floatingLabelText= "Description"
                      onChange= {handleChange('what_makes_you_a_great_mentor')}
                      defaultValue= {values.what_makes_you_a_great_mentor}

                      />   <br/>
                       <TextField
                      hintText= "About Yourself"
                      floatingLabelText= "About Yourself"
                      onChange= {handleChange('about_yourself')}
                      defaultValue= {values.about_yourself}

                      />   <br/>
                       <TextField
                      hintText= "Enter Address"
                      floatingLabelText= "Address"
                      onChange= {handleChange('address')}
                      defaultValue= {values.address}

                      />   <br/>
                         <TextField
                      hintText= "Enter City"
                      floatingLabelText= "city"
                      onChange= {handleChange('city')}
                      defaultValue= {values.city}

                      />   <br/>
                       <TextField
                      hintText= "Enter Country"
                      floatingLabelText= "country"
                      onChange= {handleChange('country')}
                      defaultValue= {values.country}

                      />   
                     <br/>
                      
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                        style={{marginTop:20}}
                      />

                    <RaisedButton
                        label="Back"
                        primary= {false}
                        onClick= {this.back}
                        style={{marginTop:20,marginLeft:20,marginBottom:20}}
                      />
                      </CardM>
                      </div>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default MentorProfessionalInfo;