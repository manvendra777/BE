import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
class FindByDomains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domains: [],
            value: [],
            MentorList: [],
            isEmpty: true,
        };
    }

    
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)
    )
  }


   
    render() {

        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10, }}>
                    <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} >
                        Find Investor
							</Typography>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: 20, padding: 20 }}>
                        
                                
                                <InputLabel>Equity Percentage</InputLabel>
                                <Input
                                    id="EquityPercentage"
                                    type= "text"
                                /><br/><br/>
                                <InputLabel>Total current Vaulation</InputLabel>
                                <Input
                                    id="TotalCurrentVaulation"
                                    type= "text"
                                /><br/><br/>
                                  <InputLabel>Total investment looking for</InputLabel>
                                <Input
                                    id="Totalinvestmentlookingfor"
                                    type= "text"
                                /><br/><br/>
                                <InputLabel>Time for investment - Next 2 years, Next 5 year, Lumpsum</InputLabel>
                                <Input
                                    id="TImeforinvestment"
                                    type= "text"
                                /><br/>
                                
                        
                                <Button style={{ marginTop: 30 }} variant="contained" color="primary" onClick={this.getListData}>find</Button>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        
                        <div style={{ height: 400, display: 'block', width: '100%' }}>
                            <div style={{ background: '#ffffff', overflowY: 'scroll', height: '100%' }}>
                                <div style={{ margin: 10 }}>
                                    <Grid container spacing={0}>
                                     
                                    </Grid>
                                </div>
                            </div>
                        </div> 
                    </div>
                </Card>
            </div>
        );
    }
}

export default FindByDomains;