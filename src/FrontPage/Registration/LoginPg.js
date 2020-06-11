import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Card, Form, Row, Col, Image} from 'react-bootstrap';
import axios from 'axios'

class LoginPg extends React.Component {

  constructor(props){
    super();
    this.state={
      username: null,
      password: null,
    };
  }

  //when the form is submitted then checks valid or not
  handleSubmit = e =>{
    e.preventDefault();
    var data= {
      username: this.state.username,
      password: this.state.password
    }
    
    if(this.state.username.length>3 || this.state.password.length>3)
    {
      console.log('Valid data');
      console.log({data});
      axios.post('http://localhost:8081/security/login', data=data)
      .then(function (response) {

          console.log(response.data);
          //window.location = "/login" //This line of code will redirect you once the submission is succeed
      })   
      if(this.resetForm){
          console.log("true");
      }
      
    }
    else{
      console.error('Invalid');

    }
   
  };


  render(){
    return (
      <div>
        <Row style={{background: "#151B54"}}>
        <Col >
          <Image style= {{width: 500, height: 600}} src= "assets/login.png"/>        </Col>
        <Col>
        <Card style={{marginTop:150, marginRight: 100, width: 300}}>
          <Container>
        <Form onSubmit= {this.handleSubmit} method= "post" >
        <h1 style={{color: "#2F4F4F", fontWeight: "bold"}}>Sign In</h1>
        <div >
            <input
              type= "text"
              placeholder= "Enter your username"
              name= "username"
              onChange= {(event)=>{this.setState({username:event.target.value})}}
              style= {{marginBottom: 20}}
              />            
        
          </div>
            <div >
              <input
                type= "password"
                placeholder= "Enter your password"
                name= "password"
                onChange= {(event)=>{this.setState({password:event.target.value})}}
                style= {{marginBottom: 20}}
                />
            </div>
            <div className="Login" style={{marginBottom:20}}>
            <Button variant= "primary" type= "submit">Login</Button>
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
