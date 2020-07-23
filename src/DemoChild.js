import React, { Component } from 'react';
import { Button } from '@material-ui/core';
class DemoChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bob: ''
        }
    }
    loggg() {
        console.log('HI');
    }
    render() {
        return (
            <div>
                <Button onClick={() => { this.loggg() }}>clicK ME</Button>
            </div>
        );
    }
}
export default DemoChild;