import React from 'react';
import { Link, Route } from 'react-router-dom';
import './RegistrationPg.css';
import { Button, Container, Card, Form, Row, Col, Image} from 'react-bootstrap';
import axios from 'axios';


class RegistrationPg extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            username: "",
            errors: {}
        };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    
    handleSubmit(event){
        event.preventDefault();
            if (this.validateForm()) {
                console.log(this.state);
              
                var data={
                "username": this.state.username,               
                "password":this.state.password,
                "email":this.state.email
                }

                console.log(data);

                axios.post('http://localhost:8081/security/addUser', {data})
                .then(function (response) {

                    console.log(response.data);
                    window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
                })                    
        }
    }
    validateForm() {

        let errors = {};
        
        let formIsValid = true;
        
        if (!this.state.email) {
        
        formIsValid = false;
        
        errors["email"] = "*Please enter your email-ID.";
        
        }
        
        if (typeof this.state.email !== "undefined") {
        
        //regular expression for email validation
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if (!pattern.test(this.state.email)) {
        
        formIsValid = false;
        
        errors["email"] = "*Please enter valid email-ID.";
        
        }
        
        }
        
        if (!this.state.password) {
        
        formIsValid = false;
        
        errors["password"] = "*Please enter your password.";
        
        }
        
        if (typeof this.state.password !== "undefined") {
        
        if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        
        formIsValid = false;
        
        errors["password"] = "*Please enter secure and strong password.";
        
        }
        
        }
        
        this.setState({
        
        errors: errors
        
        });
        
        return formIsValid;
        
        }
    render(){
        return( 
            <div>             
                <Row style= {{background: " 	#FFFF99"}}>
                    <Col >
                        <Image style= {{width: 500, height: 600, marginTop: 0}} src= "assets/registration.png"/>
                    </Col>
                    <Col >
                    <Card style= {{width: 500, marginTop: 120}}> 
                
                    <Container>
                <Form className= "RegistrationPg" method= "post" onSubmit= {this.handleSubmit} style= {{marginBottom: 40}}>
               <h2 style={{color: "#2F4F4F", fontWeight: "bold"}}>Register</h2>
                    
                    <Form.Control type= "text" 
                           name= "name" 
                           placeholder= "Enter your full name" 
                           onChange= {(event)=>{this.setState({username:event.target.value})}}
                           style= {{marginBottom: 20}}
                           />
                    
                    <Form.Control type= "email" 
                           name= "email" 
                           placeholder= "Enter your Email"  
                           onChange= {(event)=> {this.setState({email: event.target.value})}}
                           style= {{marginBottom: 20}}
                           />
                           <p style={{color: "red"}}>{this.state.errors.email}</p>
                        
                   <Form.Control type= "password" 
                           name= "password" 
                           placeholder= "Enter password" 
                           onChange= {(event)=>{this.setState({password: event.target.value})}}
                           style= {{marginBottom: 20}}
                           />
                           <p style={{color: "red"}}>{this.state.errors.password}</p>
                  
                  <Button type="submit" variant= "primary" style= {{marginTop: 20}}>Submit</Button>
                    <small>or</small>
                    <Link to= "./loginPg">
                    <Button variant="primary" style= {{marginTop: 20}}>Login</Button>
                    </Link>
                </Form>
                </Container>
                
                </Card>
                </Col>
                </Row>
            </div>
        );
    }
}
export default RegistrationPg;