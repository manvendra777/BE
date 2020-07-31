import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import MentorCard from './MentorCards'
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import {trackPromise} from 'react-promise-tracker';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import photo from './workbench_trnas.png'
import Animate from './Animate';
import Cookies from 'js-cookie';


class Recommendation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MentorList: [],
            isEmpty: true,
        };
        this.getListData = this.getListData.bind(this)
    }

    
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)
    )
  }
  getListData() {
    console.log(this.state.domains);
    this.setState({ MentorList: [] })
    var mentors;
    trackPromise(
        axios.get(``,{params: { id: Cookies.get("id") },} )
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
                <Card style={{ width: '84%',marginTop:30 }} elevation={5}>
                    <Typography variant="h5" color='primary' style={{ backgroundColor: '#e8eaf6',padding:10 }} >
                        Recommendation
							</Typography>
                    <Divider />
                    <div style={{ width: '100%', padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
                        <div style={{ display: 'flex', overflowX: 'scroll', padding: 10 }}>
                        <Grid container spacing={0}>
                                        {this.showData()}
                        </Grid>
                        </div>
                    </div>
                </Card >
            </div >
        );
    }
}

export default Recommendation;