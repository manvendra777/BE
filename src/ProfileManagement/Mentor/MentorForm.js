import React, { Component } from 'react'
import MentorPersonalInfo from './MentorPersonalInfo';
import MentorProfessionalInfo from './MentorProfessionalInfo';
import MentorSuccess from './MentorSuccess';
import MentorConfirm from './MentorConfirm'
import DomainSet from './DomainSet'


export class MentorForm extends Component {
    constructor(props) {
        super(props);
        this.setDomain = this.setDomain.bind(this)
        this.setDomainValues = this.setDomainValues.bind(this)
        this.setDomainC = this.setDomainC.bind(this)
    }

    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        phone_no: "",
        experience_in_Domain: 0,
        qualification: "",
        method_of_contact: "",
        what_makes_you_a_great_mentor: "",
        about_yourself: "",
        address: "",
        city: "",
        country: "",
        domainValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        domain:[],
        domainsC: [false, false, false, false, false, false, false, false, false, false],
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go to previous  step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    setDomain(domains){
        this.setState({domain:domains})
    }
    setDomainC(domain){
        this.setState({domainsC:domain})
    }

    setDomainValues(values){
        this.setState({domainValue:values})
    }
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }


    render() {


        const { step } = this.state;
        const { firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
            what_makes_you_a_great_mentor, about_yourself, address, city, country, domain, domainValue,domainsC } = this.state;

        const values = {
            firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
            what_makes_you_a_great_mentor, about_yourself, address, city, country, domain, domainValue,domainsC
        };
        switch (step) {
            case 1:
                return (
                    <MentorPersonalInfo
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 2:
                return (
                    <MentorProfessionalInfo
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )

            case 3:
                return (
                    <DomainSet
                        setDomain={this.setDomain}
                        setDomainValues={this.setDomainValues}
                        setDomainC={this.setDomainC}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        value={values}
                    />
                )
            case 4:
                return (
                    <MentorConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5:
                return (
                    <MentorSuccess />
                )
        }

    }
}

export default MentorForm

