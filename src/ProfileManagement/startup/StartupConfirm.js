import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';



class StartupConfirm extends React.Component{ 

   continue= e=>{
       e.preventDefault();
       //Api calling
       var data={
        "firstName": this.props.values.firstName,
        "lastName": this.props.values.lastName,
        "age": this.props.values.age,
        "email": this.props.values.email,
        "qualification": this.props.values.qualification,
        "phone_no":this.props.values.phone_no ,
        "userID":this.props.values.userID,
        "domain": this.props.values.domain,
        "DIPP_no": this.props.values.DIPP_no,
        "Address": this.props.values.Address,
        "city": this.props.values.city,
        "country": this.props.values.country,
        "postalCode": this.props.values.postalCode,
        "startupName": this.props.values.startupName,
        "startupDescription": this.props.values.startupDescription,
        "websiteURL": this.props.values.webSiteURL,
        "profession": this.props.values.profession
        }

        console.log(data);

        axios.put('http://localhost:8081/startup/profile/add', {data})
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

        const {values: {firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no, 
            Address, city, country, postalCode, startupName,startupDescription, websiteURL, profession}}= this.props;

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Confirm your Details</h1>
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
                         primaryText= "Age"
                         secondaryText= {age}
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
                         primaryText= "Highest Qualification"
                         secondaryText= {qualification}
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
                         primaryText= "DIPP No."
                         secondaryText= {DIPP_no}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Name"
                         secondaryText= {startupName}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Description"
                         secondaryText= {startupDescription}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Startup Website URL"
                         secondaryText= {websiteURL}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Domain"
                         secondaryText= {domain}
                          />
                     </List>
                     <List>
                         <ListItem
                         primaryText= "Address"
                         secondaryText= {Address}
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
                     <List>
                         <ListItem
                         primaryText= "Postal Code"
                         secondaryText= {postalCode}
                          />
                     </List>

                     <List>
                         <ListItem
                         primaryText= "Professional"
                         secondaryText= {profession}
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
                      />
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupConfirm;