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
class FindByDomains extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }
    render() {
        const handleChange = (event) => {
            this.setState({ value: event.target.value });
            console.log(this.state.value);

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
                    
                    <div style={{height:500}}>
                    <div style={{ background: '#bfbfbf', width: '100%' ,overflow:'scroll',height:'100%'}}>
                        
                        <div>
                        <MentorCards/>
                        <MentorCards/>
                        <MentorCards/>
                        <MentorCards/>
                        <MentorCards/>
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