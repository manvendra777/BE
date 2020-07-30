import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
class Comment extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div style={{ flexWrap: 'wrap', display: 'flex', marginBottom: 10, marginTop: 10 }}>
                    <Paper style={{ padding: '1%', background: '#f5f5f5', paddingLeft: 15, textAlign: 'left', borderBottomLeftRadius: 25, borderTopRightRadius: 25, borderBottomRightRadius: 25, borderTopLeftRadius: 25, }}>
                        <div><Typography variant="subtitle2">{this.props.name}</Typography> </div>
                        <Divider />
                        <Typography paragraph>
                            {this.props.comment}
                        </Typography>
                    </Paper>
                </div>

            </div>
        );
    }
}

export default Comment;