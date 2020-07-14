import React from 'react'
import {Row, Col, Container, Button, Image, Card, figcaption} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from './header'

class FrontPage extends React.Component{

    render(){
        return(
            <div>
            <Header/>
            <div style={{marginTop:120}}>
              
                <Row>
                </Row>
                <Container >
                <Row>
                    <Row>
                    <Col md= {{offset:0}}>
                        <h3 style= {{color: "#8076a3", fontFamily: "serif", fontStyle: "italic", marginTop: 5}}>
                            "Courage is not final,<br/>
                            failure is not fatal,<br/>
                            It's courage to continue that counts."<br/> </h3>
                        <h2 style= {{fontWeight: "bold", marginLeft: 180, color: "#705d72", fontFamily: "serif"}}> ...Wiston Chirchil</h2>
                       
                        <br/><br/>
                        <h1 style= {{fontWeight: "bold", color: "#6f2232", fontFamily: "times roman"}}>Find your Kind</h1>
                            <Row>
                            <Image style= {{width:150, height: 150}} src= "assets/startup1.jpeg" roundedCircle/>
                            <Col><h1 style= {{fontFamily: "Arvo", color: "#e85a4f"}}>Startup</h1>
                                <p style= {{background: "#e5e5e5", padding: 10}}>Boost your startup.<br/> Get experienced mentors guide. <br/>Get a global market for your showcasing your creativity</p>
                            </Col>
                            </Row>


                            <Row>
                            <Col><br/><h1 style= {{fontFamily: "Arvo", color: "#e85a4f"}}>Mentor</h1>
                                <p style= {{background: "#e5e5e5", padding: 10}}>Get paid for your knowlege.<br/>Get rated and increase your popularity in your domain</p>
                            </Col>
                            <Image style= {{width:150, height: 150}} src= "assets/mentor.png" roundedCircle/>
                            </Row>

                        
                        </Col>
                        </Row>
                    <Row>
                    <Col md={{offset: 3}}>
                        <Image style= {{width: 530, height: 500}} src= "assets/business.jpg" roundedCircle/>
                    </Col>
                    </Row>
                    <Row>
                    <Image style= {{width:150, height: 150}} src= "assets/investor.png" roundedCircle/>
                            <Col><br/><h1 style= {{fontFamily: "Arvo", color: "#e85a4f"}}>Investor</h1>
                                <p style= {{background: "#e5e5e5", padding: 10}}>Invest your valuable money in deserving startup.<br/>Find a community</p>
                            </Col>
                            <Image style= {{width:150, height: 150, marginLeft: 30}} src= "assets/community1.jpeg" roundedCircle/>
                            <Col><br/><h1 style= {{fontFamily: "Arvo", color: "#e85a4f"}}>Community</h1>
                                <p style= {{background: "#e5e5e5", padding: 10}}>Platform for asking your queries.<br/>Get knowlege about vaious new products and inventions.<br/>Disscuss about on your favourite topics.</p>
                            </Col>
                            </Row>
                </Row>
             
                </Container>
                <center style={{marginTop:60}}><h1 style= {{background: "powderblue", color: "black"}}>Developers</h1>
                <div>
                <Container >
                    <Row style= {{}}>
                   <Col>
                    <Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/sanket.png" roundedCircle ></Image>
                    <figcaption>Sanket Tupe</figcaption></Col>
                   <Col> <Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/harshal.jpg" roundedCircle ></Image>
                    <figcaption>Harshal Sabale</figcaption></Col>
                   <Col><Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/manvendra.png" roundedCircle ></Image>
                    <figcaption>Manvendra Chavan</figcaption></Col> 
                    <Col><Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/daksh.png" roundedCircle ></Image>
                    <figcaption>Daksh Chaudhary</figcaption></Col>
                    <Col> <Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/shubhankar.jpeg" roundedCircle ></Image>
                    <figcaption>Shubhankar Deshmukh</figcaption>
                    </Col>
                    <Col><Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/chaitrali.png" roundedCircle ></Image>
                    <figcaption>Chaitrali Shinde</figcaption>
                    </Col>
                </Row>
                </Container>
                </div></center>
                <center><h1 style= {{background: "powderblue", color: "black"}}>Mentor</h1></center>
                    <Container><center><Image style= {{width: 100, height: 100, marginLeft: 40}} src="assets/nageshsir.jpeg" roundedCircle ></Image>
                    <figcaption>Nagesh Sir</figcaption></center>
                    </Container>

            </div>
            </div>
        );
    }
}

export default FrontPage;