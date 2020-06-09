import React, { Component } from 'react'
import CommunityConfirm from './CommunityConfirm';
import CommunityPersonalInfo from './CommunityPersonalInfo';
import CommunitySuccess from './CommunitySuccess'



export class CommunityForm extends Component {

        state={
            step: 1,
             firstName: "",
            lastName: "",
            interest: ""
    
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
        const {firstName, lastName, interest}= this.state;
            
        const values= {firstName, lastName, interest};
        
            switch(step){
                case 1: 
                    return(
                        <CommunityPersonalInfo
                        handleChange= {this.handleChange}
                        nextStep= {this.nextStep}
                        values= {values}
                        />
                    )
                
                case 2: 
                return(
                    <CommunityConfirm
                    nextStep= {this.nextStep}
                    prevStep= {this.prevStep}
                    values= {values}
                    />
                )
                case 3: 
                return(
                    <CommunitySuccess/>
                )
            }

    }
}

export default CommunityForm

