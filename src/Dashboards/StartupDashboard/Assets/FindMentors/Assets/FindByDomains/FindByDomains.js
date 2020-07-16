import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MentorCards from './Assets/MentorCards';
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
            MentorList: [],
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
        //localhost:8081/mentor/profile/domain/findbylist?domain=Milk
        console.log(this.state.domains);

        this.setState({ MentorList: [] })
        var mentors;
        axios.get(`http://localhost:8082/mentor/profile/domain/findbylist`, { params: { domain: this.state.domains + '' } })
            .then(res => {
                mentors = res.data;
                mentors.map((item, i) => {
                    this.setState({ MentorList: [...this.state.MentorList, <MentorCards id={item.id} domain={item.domain} firstname={item.firstName} lastname={item.lastName} about={item.about_yourself} />] })
                })
            })
    }
    render() {

        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10,}}>
                    <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
                        Find Mentor
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
                                <Button style={{ marginTop: 20 }} variant="outlined" onClick={this.getListData}>find</Button>
                            </FormControl>
                        </div>
                        <Divider orientation="vertical" flexItem />

                        <div style={{ height: 550, display: 'block', width: '100%' }}>
                            <div style={{ background: '#bfbfbf', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', minWidth: '100%', overflow: 'scroll', height: '100%' }}>
                                <div>
                                    {this.state.MentorList.map(child => child)}
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