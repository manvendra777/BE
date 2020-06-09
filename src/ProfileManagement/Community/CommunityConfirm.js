import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';




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

axios.put('http://localhost:8081/community/profile/add', {data})
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

        const {values: {firstName, lastName, interest}}= this.props;

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
                      />
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default CommunityConfirm;