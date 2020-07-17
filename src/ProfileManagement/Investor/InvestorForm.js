import React, { Component } from 'react'
import InvestorPersonalInfo from './Assets/InvestorPersonalInfo';
import InvestorSuccess from './Assets/InvestorSuccess';
import InvestorConfirm from './Assets/InvestorConfirm'




export class InvestorForm extends Component {

        state={
            step: 1,
             firstName: "",
            lastName: "",
            phone_no:0,
            email: "",
            age: 0,
            min:0,
            max:0
    
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
        const {firstName, lastName, email, phone_no, age,min,max}= this.state;
            
        const values= {firstName, lastName, email, phone_no, age,min,max};
        
            switch(step){
                case 1: 
                    return(
                        <InvestorPersonalInfo
                        handleChange= {this.handleChange}
                        nextStep= {this.nextStep}
                        values= {values}
                        />
                    )
                
                case 2: 
                return(
                    <InvestorConfirm
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                )
                case 3: 
                return(
                    <InvestorSuccess/>
                )
            }

    }
}

export default InvestorForm

