import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import Header from './header';
import CardM from '@material-ui/core/Card';
import Cookies from 'js-cookie';



class StartupConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 'blank'
        }
        this.setId = this.setId.bind(this)
    }
    componentWillMount() {
        this.setId();
    }
    setId() {
        this.setState({ id: Cookies.get('tempId') })
    }

    continue = e => {
        e.preventDefault();
        var self = this;
        axios.put('http://localhost:8082/startup/profile/add', {
            "id": this.state.id,
            "firstName": this.props.values.firstName,
            "lastName": this.props.values.lastName,
            "startupName": this.props.values.startupName,
            "domain": this.props.values.domain,
            "qualification": this.props.values.qualification,
            "profession": this.props.values.profession,
            "email": this.props.values.email,
            "phone_no": this.props.values.phone_no,
            "age": this.props.values.age,
            "city": this.props.values.city,
            "country": this.props.values.country,
            "postalCode": this.props.values.postalCode,
            "startupDescription": this.props.values.startupDescription,
            "websiteURL": this.props.values.websiteURL,
            "address": this.props.values.Address,
            "dipp_no": this.props.values.DIPP_no,
        })
            .then(function (response) {
                self.props.nextStep();
            })
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }




    render() {

        const { values: { firstName, lastName, age, email, qualification, phone_no, userID, domain, DIPP_no,
            Address, city, country, postalCode, startupName, startupDescription, websiteURL, profession } } = this.props;

        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <Header info="Confirm your Details" />
                    <div style={{ margin: "auto", width: "40%" }}>
                        <CardM style={{ width: 600, marginTop: 70, marginRight: 100, marginLeft: 100, padding: 20, paddingLeft: 50 }} elevation={10}>
                            <List>
                                <ListItem
                                    primaryText="First Name:"
                                    secondaryText={firstName}
                                />
                            </List> <List>
                                <ListItem
                                    primaryText="Last Name:"
                                    secondaryText={lastName}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Age"
                                    secondaryText={age}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Email"
                                    secondaryText={email}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Highest Qualification"
                                    secondaryText={qualification}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Phone No."
                                    secondaryText={phone_no}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="DIPP No."
                                    secondaryText={DIPP_no}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Startup Name"
                                    secondaryText={startupName}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Startup Description"
                                    secondaryText={startupDescription}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Startup Website URL"
                                    secondaryText={websiteURL}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Domain"
                                    secondaryText={domain}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Address"
                                    secondaryText={Address}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="City"
                                    secondaryText={city}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Country"
                                    secondaryText={country}
                                />
                            </List>
                            <List>
                                <ListItem
                                    primaryText="Postal Code"
                                    secondaryText={postalCode}
                                />
                            </List>

                            <List>
                                <ListItem
                                    primaryText="Professional"
                                    secondaryText={profession}
                                />
                            </List>


                            <RaisedButton
                                label="Confirm and Continue"
                                primary={true}
                                onClick={this.continue}
                                style={{ marginTop: 20 }}
                            />
                            <RaisedButton
                                label="Back"
                                primary={false}
                                onClick={this.back}
                                style={{ marginTop: 20, marginLeft: 20 }}
                            />
                        </CardM>
                    </div>
                </React.Fragment>

            </MuiThemeProvider>


        );

    }

}

export default StartupConfirm;