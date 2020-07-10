import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import CardM from '@material-ui/core/Card';
import Header from './header';



class MentorConfirm extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       //Api calling
       var data={
                "firstName": this.props.values.firstName,
                "lastName": this.props.values.lastName,
                "email": this.props.values.email,
                "phone_no": this.props.values.phone_no,
                "experience_in_Domain": this.props.values.experience_in_Domain,
                "qualification": this.props.values.qualification,
                "method_of_contact": this.props.values.method_of_contact,
                "what_makes_you_a_great_mentor": this.props.values.what_makes_you_a_great_mentor,
                "about_yourself": this.props.values.about_yourself,
                "address": this.props.values.address,
                "city": this.props.values.city,
                "country": this.props.values.country,
        }

        console.log(data);

        axios.put('http://localhost:8082/mentor/profile/add', {data})
        .then(function (response) {

            console.log("true");
    })
       this.props.nextStep();
   }

   back= e=>{
    e.preventDefault();
    this.props.prevStep();
}
      
            
        

    render(){

        const {values: {firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
            what_makes_you_a_great_mentor, about_yourself, address, city, country}}= this.props;

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
                         primaryText= "Phone No."
                         secondaryText= {phone_no}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Email"
                         secondaryText= {email}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "experience in Domain"
                         secondaryText= {experience_in_Domain}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Qualification"
                         secondaryText= {qualification}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Method of Contact"
                         secondaryText= {method_of_contact}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "What makes you a great mentor"
                         secondaryText= {what_makes_you_a_great_mentor}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "About Yourself"
                         secondaryText= {about_yourself}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Address"
                         secondaryText= {address}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "City"
                         secondaryText= {city}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Country"
                         secondaryText= {country}
                          />
                     </List>

                      
                      <RaisedButton
                        label="Confirm and Continue"
                        primary= {true}
                        onClick= {this.continue}
                        style={{marginTop:20}}
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

export default MentorConfirm;