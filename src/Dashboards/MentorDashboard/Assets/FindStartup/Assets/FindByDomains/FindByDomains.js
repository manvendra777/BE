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
        //54.237.17.61/mentor/profile/domain/findbylist?domain=Milk
        console.log(this.state.domains);

        this.setState({ StartupList: [] })
        var startups;
        axios.get(`http://54.237.17.61/startup/profile/domain/findbylist`, { params: { domain: this.state.domains + '' } })
            .then(res => {
                startups = res.data;
                startups.map((item, i) => {
                    this.setState({ StartupList: [...this.state.StartupList, <StartupCards id={item.id} domain={item.domain} firstname={item.firstName} lastname={item.lastName} />] })
                })
            })
    }
    render() {

        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10,}}>
                    <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                        Find Startups
							</Typography>
                    <Divider />
                    <div style={{ display: 'flex' }}>
                        <div style={{ margin: 20, padding: 20 }}>


                            <FormControl >
                                <FormLabel >Domain</FormLabel>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Ai" value="Ai" color="primary" />} label="Ai" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Marketing" value="Marketing" color="primary" />} label="Marketing" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Milk" value="Milk" color="primary" />} label="Milk" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Travel" value="Travel" color="primary" />} label="Travel" />
                                    <FormControlLabel control={<Checkbox onClick={this.getList} name="Armed-Vehicles" value="Armed-Vehicles" color="primary" />} label="Armed-Vehicles" />
                                </FormGroup>
                                <Button style={{ marginTop: 20 , color: "blue"}} variant="outlined" color="primary" onClick={this.getListData}>find</Button>
                            </FormControl>
                        </div>
                        <Divider orientation="vertical" flexItem />

                        <div style={{ height: 550, display: 'block', width: '100%' }}>
                            <div style={{ background: '#bfbfbf', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', minWidth: '100%', overflow: 'scroll', height: '100%' }}>
                                <div>
                                    {this.state.StartupList.map(child => child)}
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