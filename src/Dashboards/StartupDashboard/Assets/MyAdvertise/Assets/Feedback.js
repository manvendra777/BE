import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
class Feedback extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Paper elevation={5} style={{ width: '100%', padding: '5%', marginTop: '1%', marginBottom: '1%' }}>
                    <div>
                        <Typography color="primary" variant="h6"  style={{ margin: '1%', display: 'flex', }} gutterBottom>
                            Name: {this.props.name}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1"  style={{ margin: '1%', display: 'flex',color:'#263238' }} gutterBottom>
                            Feedback: {this.props.body}
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }
}


export default Feedback;