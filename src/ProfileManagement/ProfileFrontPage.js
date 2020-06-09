import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import StartupPersonalInfo from './startup/startupPersnonalInfo'
import StartupForm from './startup/StartupForm'
import { Link, Route } from 'react-router-dom';



export class FrontPage extends Component {
    

    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img src= "./assets/startup.jpeg"/>
                        <Link to= "startupform">
                        <Button variant="primary" >Startup</Button>
                        </Link>
                       
                    </Card>
                    <Card> 
                        <Card.Img src= "./assets/mentor.jpeg"/>
                        <Link to= "mentorform">
                        <Button variant="primary" >Mentor</Button>
                        </Link>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                    <Card.Img src= "./assets/investor.jpeg"/>
                        <Link to= "investorform">
                        <Button variant="primary" >Investor</Button>
                        </Link>
                    </Card>
                    <Card>
                    <Card.Img src= "./assets/community.jpeg"/>
                        <Link to= "communityform">
                        <Button variant="primary" >Community</Button>
                        </Link>
                    </Card>
                </CardDeck>
                 
            </div>
        )
    }
}

export default FrontPage;
