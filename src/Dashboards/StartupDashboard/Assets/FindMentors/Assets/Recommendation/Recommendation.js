import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import MentorCard from './MentorCards'
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
class Recommendation extends Component {
    render() {
        return (
            <div>
                <Card style={{width: '84%'}} elevation={5}>
                <Typography variant="h5" color='primary' style={{margin:10}} gutterBottom>
								Recommendation
							</Typography>
                <Divider/>
                <div style={{ width: '100%',padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
                    <div style={{ display: 'flex', overflowX: 'scroll',background:'#bfbfbf',padding:10 }}>
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                        <MentorCard />
                    </div>
                </div>
                </Card >
            </div >
        );
    }
}

export default Recommendation;