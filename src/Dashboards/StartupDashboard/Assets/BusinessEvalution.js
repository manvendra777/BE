import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import step1 from   './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import Button from '@material-ui/core/Button';

class BusinessEvalution extends React.Component{

    render(){
        return (<div style={{ marginLeft: 100}}>
            <Typography variant="h5" gutterBottom style= {{color: "#1e88e5"}}>Determine the Cash Flow of the business</Typography>
            <Card style= {{height: 300, width: 500}}>
            <img style={{width:450, height: 243}} src={step1}/>
            </Card>
            <Typography variant="h5" gutterBottom  style= {{color: "#1e88e5"}}> Determine the Multiple of Earnings to Use</Typography>
            <Card style= {{height: 300, width: 500}}>
            <img style={{width:450, height: 243}} src={step2}/>
            </Card>
            <Typography variant="h5" gutterBottom  style= {{color: "#1e88e5"}}>Purpose Of Valuation (Informational only)</Typography>
            <Card style= {{height: 300, width: 500}}>
            <img style={{width:450, height: 243}} src={step3}/>
            </Card>
            <Button variant="contained" color="primary" style={{marginTop: 10}}>Calulate business value</Button>
        </div>)
    }
}
export default BusinessEvalution;