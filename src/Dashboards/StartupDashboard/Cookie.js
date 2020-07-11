import React, { Component } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from "@material-ui/core";
class Cookie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cookie: ''
        };
    }
    getCookie() {
        console.log(Cookies.get('username'));
    }
    //localhost:8080/security/get
    setCookie() {
        Cookies.set('username', 'xxyyzzysasds', { expires: 7 })
    }

    render() {

        return (<div><Button onClick={this.setCookie}>set</Button><Button onClick={this.getCookie}>get</Button></div>)
    }
} export default Cookie;
