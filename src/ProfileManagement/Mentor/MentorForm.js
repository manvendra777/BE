import React, { Component } from 'react'
import MentorPersonalInfo from './MentorPersonalInfo';
import MentorProfessionalInfo from './MentorProfessionalInfo';
import MentorSuccess from './MentorSuccess';
import MentorConfirm from './MentorConfirm'



export class MentorForm extends Component {

        state={
            step: 1,
            firstName:"",
            lastName:"",
            email: "",
            phone_no: "",
            experience_in_Domain: "",
        qualification: "",
        method_of_contact: "",
        what_makes_you_a_great_mentor: "",
        about_yourself: "",
        address: "",
        city: "",
        country: ""
    
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
        const {firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
               what_makes_you_a_great_mentor, about_yourself, address, city, country}= this.state;
            
        const values= {firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
            what_makes_you_a_great_mentor, about_yourself, address, city, country};
        
            switch(step){
                case 1: 
                    return(
                        <MentorPersonalInfo
                        handleChange= {this.handleChange}
                        nextStep= {this.nextStep}
                        values= {values}
                        />
                    )
                case 2: 
                return(
                    <MentorProfessionalInfo
                    handleChange= {this.handleChange}
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                    )
                case 3: 
                return(
                    <MentorConfirm
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                )
                case 4: 
                return(
                    <MentorSuccess/>
                )
            }

    }
}

export default MentorForm

