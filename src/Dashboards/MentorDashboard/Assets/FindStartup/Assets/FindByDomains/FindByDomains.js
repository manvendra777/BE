import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import StartupCards from './Assets/StartupCards';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Animate from './Assets/Animate'
class FindByDomains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domains: [],
            value: [],
            StartupList: [],
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
        //54.237.17.61/management/mentor/profile/domain/findbylist?domain=Milk
        console.log(this.state.domains);

        this.setState({ StartupList: [] })
        var startups;
        axios.get(`http://54.237.17.61/management/startup/profile/domain/findbylist`, { params: { domain: this.state.domains + '' } })
            .then(res => {
                startups = res.data;
                startups.map((item,i) => {
                    this.setState({ StartupList: [...this.state.StartupList, <Animate key={i} de={item.startup} id={item.id} domain={item.domain} firstname={item.firstName} sname={item.startupName} lastname={item.lastName} />] })
                })
            })
    }
    render() {

        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10, }}>
                    <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                        Find Startups
							</Typography>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: 20, padding: 20 }}>


                            <FormControl >
                                <FormLabel >Domain</FormLabel>
                                <FormGroup>
                                <FormControlLabel control={<Checkbox onClick={this.getList} name="Agriculture" value="Agriculture" color="primary" />} label="Agriculture" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Artificial Intelligence" value="Artificial Intelligence" color="primary" />} label="Artificial Intelligence" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Art and Photography" value="Art and Photography" color="primary" />} label="Art and Photography" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Education" value="Education" color="primary" />} label="Education" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Fashion" value="Fashion" color="primary" />} label="Fashion" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Food and Beverages" value="Food and Beverages" color="primary" />} label="Food and Beverages" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Heathcare" value="Heathcare" color="primary" />} label="Heathcare" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Marketing" value="Marketing" color="primary" />} label="Marketing" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Sports" value="Sports" color="primary" />} label="Sports" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Other" value="Other" color="primary" />} label="Other" />
                                </FormGroup>
                                <Button style={{ marginTop: 20}} variant="contained"  color="primary" onClick={this.getListData}>find</Button>
                            </FormControl>
                        </div>
                        <Divider orientation="vertical" flexItem />

                        <div style={{ height: 550, display: 'block', width: '100%' }}>
                            <div style={{ background: '#bfbfbf', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', minWidth: '100%', overflow: 'scroll', height: '100%' }}>
                                <div>
                                    <div style={{ margin: 10 }}>
                                        <Grid container spacing={0}>
                                            {this.state.StartupList.map(child => child)}
                                        </Grid>
                                    </div>
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