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
import Grid from '@material-ui/core/Grid';
import Animate from './Assets/Animate';
import {trackPromise} from 'react-promise-tracker';
import photo from './Assets/workbench_trnas.png'
import Paper from '@material-ui/core/Paper';
class FindByDomains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domains: [],
            value: [],
            MentorList: [],
            isEmpty: true,
        };
        this.getListData = this.getListData.bind(this)
    }

    
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)
    )
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
        //localhost:8082/management/mentor/profile/domain/findbylist?domain=Milk
        console.log(this.state.domains);
        this.setState({ MentorList: [] })
        var mentors;
        trackPromise(
            axios.get(`http://localhost:8082/management/mentor/profile/domain/findbylist`, { params: { domain: this.state.domains + '' } })
            .then(res => {
                mentors = res.data;
                mentors.map((item, i) => {
                    this.setState({ MentorList: [...this.state.MentorList, <Animate id={item.id} domain={item.domain} firstname={item.firstName} lastname={item.lastName} about={item.about_yourself} />] })
                })
            })
        )
      
    }

    showData = () => {
        if (this.state.MentorList.length > 0) {
            return (this.state.MentorList.map(child => child))
        } else {
            return (<div><div elevation={5} style={{width: '100%', height: '100%', display: 'flex' }} >
                <img style={{ width: '100%', marginTop: 'auto', }} src={photo}></img>
            </div></div>)
        }
    }
    render() {

        return (
            <div>
                <Card elevation={5} style={{ width: '84%', marginTop: 10, }}>
                    <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6', padding: 10 }} >
                        Find Mentor
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
                                <Button style={{ marginTop: 30 }} variant="contained" color="primary" onClick={this.getListData}>find</Button>
                            </FormControl>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        
                        <div style={{ height: 700, display: 'block', width: '100%' }}>
                            <div style={{ background: '#ffffff', overflowY: 'scroll', height: '100%' }}>
                                <div style={{ margin: 10 }}>
                                    <Grid container spacing={0}>
                                        {this.showData()}
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