import React, { Component } from 'react';
import DemoChild from './DemoChild';
import Button from '@material-ui/core/Button'
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:1
        }
    }
    
    incrementCounter=()=>{
        this.setState({counter:this.state.counter+1})
    }

    render() {
        return (
            <div style={{margin:300}}>
                goes here
                <div>
                    COUNTER : {this.state.counter}
                </div>
                <DemoChild method={this.incrementCounter}/>
            </div>
        );
    }
}



export default Demo;