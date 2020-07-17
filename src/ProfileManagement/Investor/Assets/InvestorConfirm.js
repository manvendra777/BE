import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import Header from './header';
import CardM from '@material-ui/core/Card';
import Cookies from 'js-cookie';



class InvestorConfirm extends React.Component {

    continue = e => {
        e.preventDefault();
        //Api calling
        var data = {
            "firstName": this.props.values.firstName,
            "lastName": this.props.values.lastName,
            "email": this.props.values.email,
            "phone_no": this.props.values.phone_no,
            "age": this.props.values.age,


        }
        axios.put('http://localhost:8082/investor/profile/add', {
            "id": Cookies.get('tempId'),
            "firstName": this.props.values.firstName,
            "lastName": this.props.values.lastName,
            "email": this.props.values.email,
            "phone_no": this.props.values.phone_no,
            "age": this.props.values.age,
            "min": this.props.values.min,
            "max": this.props.values.max
        })
            .then(function (response) {

                console.log("true");
            })

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }




    render() {

        const { values: { firstName, lastName, email, phone_no, age } } = this.props;

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
                                    primaryText="Phone No."
                                    secondaryText={phone_no}
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
                                    primaryText="Age"
                                    secondaryText={age}
                                />
                            </List>

                            <RaisedButton
                                label="Confirm and Continue"
                                primary={true}
                                onClick={this.continue}
                            />
                            <RaisedButton
                                label="Back"
                                primary={false}
                                style={{ marginTop: 20, marginLeft: 20 }}
                                onClick={this.back}
                            />
                        </CardM>
                    </div>
                </React.Fragment>

            </MuiThemeProvider>


        );

    }

}

export default InvestorConfirm;