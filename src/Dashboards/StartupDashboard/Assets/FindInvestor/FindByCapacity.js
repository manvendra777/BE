import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InvestorCard from './InvestorCard';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Animate from './Animate'
class FindByCapacity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domains: [],
            value: [0,1000],
            InvestorList: [],
        };
        this.getListData = this.getListData.bind(this)
    }

    getList = (event) => {

        let domain_list = this.state.domains;
        let check = event.target.checked;
        let checked_domain = event.target.value;

        if (check) {
            this.setState({
                domains: [...this.state.domains, checked_domain]
            })
        } else {
            var index = domain_list.indexOf(checked_domain);
            if (index > -1) {
                domain_list.splice(index, 1);
                this.setState({
                    domains: domain_list
                })
            }
        }
    };
    getListData() {
        console.log(this.state.value);
        //54.237.17.61/management/investor/profile/find?min=100&max=199
        this.setState({ InvestorList: [] })
        var investor;
        axios.get(`http://54.237.17.61/management/investor/profile/find`, { params: { min: this.state.value[0],max:this.state.value[1] } })
            .then(res => {
                investor = res.data;
                investor.map((item, i) => {
                    console.log(item);
                    this.setState({ InvestorList: [...this.state.InvestorList, <Animate id={item.id} domain={item.domain} firstname={item.firstName} lastname={item.lastName} />] })
                })
            })
    }


    valuetext = (value) => {
        return '${value}°C';
    }
   
    render() {
        const marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 2000,
                label: '20,000',
            },
            {
                value: 5000,
                label: '50,000',
            },
            {
                value: 10000,
                label: 'Max',
            },
        ];
        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10 }}>
                    <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                        Find Investor
							</Typography>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: 20, padding: 20 }}>


                            <FormControl >
                                <FormLabel style={{ marginBottom: 30 }}>Investment</FormLabel>
                                <Slider style={{ height: 350 }}
                                    orientation="vertical"
                                    defaultValue={[0, 1000]}
                                    aria-labelledby="vertical-slider"
                                    getAriaValueText={this.valuetext}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    max={10000}
                                    min={0}
                                    step={100}
                                    onChange={ (e, val) => this.setState({value:val}) }
                                />

                                <Button style={{ marginTop: 20 }} variant="outlined" onClick={this.getListData}>find</Button>
                            </FormControl>
                        </div>
                        <Divider orientation="vertical" flexItem />

                        <div style={{ height: 550, display: 'block', width: '100%' }}>
                            <div style={{ background: '#bfbfbf', overflow: 'scroll', height: '100%' }}>
                                <div style={{margin:10}}>
                                <Grid container spacing={0}>
                                    {this.state.InvestorList.map(child => child)}
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

export default FindByCapacity;