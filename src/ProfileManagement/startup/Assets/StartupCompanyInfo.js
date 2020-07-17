import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header';
import CardM from '@material-ui/core/Card';



class StartupCompanyInfo extends React.Component{ 

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
                  <Header info="Company Details"/>
                    <div style={{margin:"auto",width:"40%"}}>
                    <CardM style= {{width: 400,marginTop: 80,marginRight:100,marginLeft:100,padding:10,paddingLeft:50}} elevation={10}> 
                      <TextField
                      hintText= "Enter your profession"
                      floatingLabelText= "profession"
                      onChange= {handleChange('profession')}
                      defaultValue= {values.profession}
                      />
                  <br/>
                      <TextField
                      hintText= "Enter Company Name"
                      floatingLabelText= "Company Name"
                      onChange= {handleChange('startupName')}
                      defaultValue= {values.startupName}
                      />
                         <br/>
                       <TextField
                      hintText= "Enter Startup Description"
                      floatingLabelText= "Descripyion"
                      onChange= {handleChange('startupDescription')}
                      defaultValue= {values.startupDescription}
                      />
                         <br/>
                       <TextField
                      hintText= "Enter Website URL"
                      floatingLabelText= "URL"
                       type= "url"
                      onChange= {handleChange('websiteURL')}
                      defaultValue= {values.websiteURL}
                      />   <br/>
                       <TextField
                      hintText= "Enter DIPP Number"
                      floatingLabelText= "DIPP No."
                      onChange= {handleChange('DIPP_no')}
                      defaultValue= {values.DIPP_no}

                      />   <br/>
                       <TextField
                      hintText= "Enter Address"
                      floatingLabelText= "Address"
                      onChange= {handleChange('Address')}
                      defaultValue= {values.Address}

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

                      />   <br/>
                       <TextField
                      hintText= "Enter Postal Code"
                      floatingLabelText= "Postal Code"
                      onChange= {handleChange('postalCode')}
                      defaultValue= {values.postalCode}

                      />
                     <br/>
                      <RaisedButton
                        label="Continue"
                        primary= {true}
                        onClick= {this.continue}
                        style={{marginTop:20,marginBottom:5}}
                      />

                    <RaisedButton
                        label="Back"
                        primary= {false}
                        onClick= {this.back}
                        style={{marginLeft:20}}
                      />
                      </CardM>
                      </div>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupCompanyInfo;