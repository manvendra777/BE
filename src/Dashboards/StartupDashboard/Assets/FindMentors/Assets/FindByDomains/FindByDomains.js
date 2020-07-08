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
class FindByDomains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            MentorList:[]
        };
    }

    getDomainByList(){
        //localhost:8081/mentor/profile/domain/findbylist?domain=Milk
        var domainList='Milk';
        this.setState({MentorList:[]})
        var mentors;
        axios.get(`http://localhost:8081/mentor/profile/domain/findbylist`, { params: { domain:domainList} })
        .then(res => {
          mentors = res.data;
          mentors.map((item, i) => {
              console.log(item);
              
              this.setState({MentorList:[...this.state.MentorList,<MentorCards domain={item.domain} firstname={item.firstName} lastname={item.lastName} about={item.about_yourself} />]})
          })
        })
    }
    render() {
        const handleChange = (event) => {
            this.setState({ value: event.target.value });
            console.log(this.state.value);
            this.getDomainByList();
        };

      

        return (
            <div>
                <Card elevation={5} style={{ width: '70%',marginTop:10}}>
                <Typography variant="h5" color='primary' style={{margin:10}} gutterBottom>
								Find Mentor
							</Typography>
                            <Divider/>
                <div  style={{ display: 'flex' }}>
                    <div style={{ margin: 20,padding:20 }}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Domains</FormLabel>
                            <RadioGroup aria-label="Domains" name="gender1" value={this.state.value} onChange={handleChange}>
                                <FormControlLabel value="Ai" control={<Radio />} label="Ai" />
                                <FormControlLabel value="Education" control={<Radio />} label="Education" />
                                <FormControlLabel value="Marketing" control={<Radio />} label="Marketing" />
                                <FormControlLabel value="Travel" control={<Radio />} label="Travel" />
                                <FormControlLabel value="Safety" control={<Radio />} label="Safety" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    
               
                    <div style={{height:550,display:'block',width:'100%'}}>
                    <div style={{ background: '#bfbfbf', display:'flex',flexFlow:'row wrap',justifyContent:'space-around',minWidth:'100%' ,overflow:'scroll',height:'100%'}}>
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