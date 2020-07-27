import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import StartupCards from './StarupCards'
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
class Recommendation extends Component {
    render() {
        return (
            <div>
                <Card style={{width: '80%'}} elevation={5}>
                <Typography variant="h5" color='primary' style={{margin:10}} gutterBottom>
								Recommendation
							</Typography>
                <Divider/>
                <div style={{ width: '100%',padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
                    <div style={{ display: 'flex', overflow: 'scroll',background:'#bfbfbf',padding:10 }}>
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                        <StartupCards />
                    </div>
                </div>
                </Card >
            </div >
        );
    }
}

export default Recommendation;