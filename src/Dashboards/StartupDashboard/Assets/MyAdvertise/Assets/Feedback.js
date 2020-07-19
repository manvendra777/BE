import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
class Feedback extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Paper style={{ width: '100%', padding: '2%', marginTop: '1%', marginBottom: '1%' }}>
                    <div>
                        Name: {this.props.name}
                    </div>
                    <div>
                        feedback: {this.props.body}
              </div>
                </Paper>
            </div>
        );
    }
}


export default Feedback;