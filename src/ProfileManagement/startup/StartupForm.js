import React, { Component } from 'react'
import StartupPersonalInfo from './Assets/startupPersnonalInfo';
import StartupCompanyInfo from './Assets/StartupCompanyInfo';
import StartupConfirm from './Assets/StartupConfirm';
import StartupSuccess from './Assets/StartupSuccess';
import DomainSet from './Assets/DomainSet';



export class StartupForm extends Component {
    constructor(props) {
        super(props);
    this.setDomain = this.setDomain.bind(this)
    this.setDomainC = this.setDomainC.bind(this)
    }
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        age: 0,
        email: "",
        qualification: "",
        phone_no: 0,
        userID: "",
        DIPP_no: 0,
        Address: "",
        city: "",
        country: "",
        postalCode: 0,
        startupName: "",
        startupDescription: "",
        websiteURL: "",
        profession: "",
        domain: [],
        domainC:[false,false,false,false,false,false,false,false,false,false]
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

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    setDomain(domain){
        this.setState({domain:domain})
    }
    setDomainC(domainC){
        this.setState({domainC:domainC})
    }

    render() {


        const { step } = this.state;
        const { firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no,
            Address, city, country, postalCode, startupName, startupDescription, websiteURL, profession,domainC } = this.state;

        const values = {
            firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no,
            Address, city, country, postalCode, startupName, startupDescription, websiteURL, profession,domainC
        }

        switch (step) {
            case 1:
                return (
                    <StartupPersonalInfo
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        values={values}
                    />
                )
            case 2:
                return (
                    <StartupCompanyInfo
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
                        setDomainC={this.setDomainC}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <StartupConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5:
                return (
                    <StartupSuccess />
                )
        }

    }
}

export default StartupForm

