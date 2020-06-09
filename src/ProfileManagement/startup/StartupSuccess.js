import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class StartupSuccess extends React.Component{ 


    render(){

        return(
        
                <MuiThemeProvider>
                  <React.Fragment>
                  <h1 style= {{color: "white",
                                 backgroundColor: "#77a6f7"
                    }}>Success</h1>
                     <h1>Thank You </h1>
                     <p>Your Data Is Submitted</p>
                  </React.Fragment>
         
                </MuiThemeProvider>
                
       
        );

    }
    
}

export default StartupSuccess;