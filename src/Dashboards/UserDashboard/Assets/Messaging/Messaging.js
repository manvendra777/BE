import React, { Component } from 'react';
import List from "./Assets/ListOfOnlineCandidates"
import MessagesFinal from './MessagesFinal'
import SendMessage from './Assets/SendMessage'

class Messaging extends Component {

    
    render() {
        return (
            <div style={{right:"25%",float:"right",position:"relative"}}>
                <List/>
               
                <MessagesFinal/>
            </div>
        );
    }
}

export default Messaging;