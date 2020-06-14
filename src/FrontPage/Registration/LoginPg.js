import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Card, Form, Row, Col, Image} from 'react-bootstrap';


//check if the form is empty or not if empty then sends valid as false
const formValid= ({formErrors, ...rest})=>
{
  let valid= true;

  Object.values(formErrors).forEach(val=> {
    val.length> 0 && (valid= false);
  });

  Object.values(rest).forEach(val=> {
    val ==null && (valid= false);
  });
   
  return valid;
}

class LoginPg extends React.Component {

  constructor(props){
    super();
    this.state={
      Email: null,
      password: null,
      formErrors: {
        Email: "",
        password: ""
      }
    };
  }

  //when the form is submitted then checks valid or not
  handleSubmit = e =>{
    e.preventDefault();

    if(formValid(this.state))
    {
      console.log('Valid data');
    }
    else{
      console.error('Invalid');
    }
  };

  //accepts only valid inputs 
  handleChange = e=> {
    e.preventDefault();
    const {name, value}= e.target;
    let formErrors= this.state.formErrors;

    switch(name)
    {
      case "Email": 
        formErrors.Email= 
        value.length < 3 && value.length > 0 ? "Email address can't be so short" : "";
        break;
      
      case "password":
        formErrors.password= 
        value.length < 6 && value.length > 0 ? "password should contain minimum 6 letters": "";
        break;
        default:
          break;
    }

    this.setState({ formErrors, [name]: value}, ()=> console.log(this.state))
  };


  render(){

    const { formErrors}= this.state;
    return (
      <div>
      <Row style={{background: "#151B54"}}>
      <Col >
          <Image style= {{width: 500, height: 600}} src= "assets/login.png"/>        </Col>
        <Col>
        <Card style={{marginTop:150, marginRight: 100, width: 300}}>
          <Container>
        <Form onSubmit= {this.handleSubmit} onValidate >
        <h1 style={{color: "#2F4F4F", fontWeight: "bold"}}>Sign In</h1>
        <div className= "Email">
            <input
              type= "email"
              placeholder= "Enter your email"
              name= "Email"
              onValidate
              onChange= {this.handleChange}   
              style={{marginBottom:20}}         
            />
          </div>
          {formErrors.Email.length>0 && (
  <span className= "errorMessage" style= {{color:"red"}}>{formErrors.Email}</span>
          )}
              <div className= "password">
              <input
                type= "password"
                placeholder= "Enter your password"
                name= "password"
                onValidate
                onChange= {this.handleChange}  
                style={{marginBottom:20}}           
              />
            </div>
            {formErrors.password.length>5 && (
  <span className= "errorMessage" style= {{color:"red"}}>{formErrors.password}</span>
          )}
            <div className="Login" style={{marginBottom:20}}>
              <Link to="/startupDashboard">
            <Button variant= "primary" type= "submit">Login</Button></Link>
              <Link to= "/registrationPg">
              <small> Register</small>
            </Link>
            </div>
        </Form>
        </Container>
        </Card>
        </Col>
        </Row>
      </div>

    )
  }
  
}

export default LoginPg;
