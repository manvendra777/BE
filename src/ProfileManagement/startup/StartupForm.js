import React, { Component } from 'react'
import StartupPersonalInfo from './startupPersnonalInfo';
import StartupCompanyInfo from './StartupCompanyInfo';
import StartupConfirm from './StartupConfirm';
import StartupSuccess from './StartupSuccess';



export class StartupForm extends Component {

        state={
            step: 1,
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            qualification: "",
            phone_no: "",
            userID: "",
            domain: "",
            DIPP_no: "",
            Address: "",
			city: "",
			country: "",
			postalCode: "",
			startupName: "",
			startupDescription: "",
            websiteURL: "",
            profession: ""
        }

        //proceed to next step
        nextStep= ()=>{
            const {step}= this.state;
            this.setState({
                step: step+1
            });
        }

         //Go to previous  step
         prevStep= ()=>{
            const {step}= this.state;
            this.setState({
                step: step-1
            });
        }

        handleChange= input=> e=>{
            this.setState({
                [input]: e.target.value
            })
        }

    
    render() {

        
        const {step}= this.state;
        const {firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no, 
            Address, city, country, postalCode, startupName,startupDescription, websiteURL, profession}= this.state;
            
        const values= {firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no, 
            Address, city, country, postalCode, startupName,startupDescription, websiteURL, profession}
        
            switch(step){
                case 1: 
                    return(
                        <StartupPersonalInfo
                        handleChange= {this.handleChange}
                        nextStep= {this.nextStep}
                        values= {values}
                        />
                    )
                case 2: 
                return(
                    <StartupCompanyInfo
                    handleChange= {this.handleChange}
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                    )
                case 3: 
                return(
                    <StartupConfirm
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                )
                case 4: 
                return(
                    <StartupSuccess/>
                )
            }

    }
}

export default StartupForm

