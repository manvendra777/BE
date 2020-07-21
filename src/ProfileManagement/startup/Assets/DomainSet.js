import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar, Divider } from 'material-ui';
import Header from './header';
import CardM from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
class DomainSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: props.values.domain,
            domainsC: props.values.domainC,
        }
        this.getList = this.getList.bind(this)
    }

    getList = (event) => {

        let domain_list = this.state.domains;

        let domain_c = this.state.domainsC;
        let check = event.target.checked;

        let checked_domain = event.target.value;

        let n = event.target.name - 1;

        if (check) {
            domain_c[n] = true;
            this.setState({
                domains: [...this.state.domains, checked_domain],
                domainsC: domain_c,
            })
        } else {
            var index = domain_list.indexOf(checked_domain);
            domain_c[n] = false;
            if (index > -1) {
                domain_list.splice(index, 1);
                this.setState({
                    domains: domain_list,
                    domainsC: domain_c,
                })
            }
        }
        console.log(this.state.domain);
        console.log(this.state.domainsC);
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <div>

                <MuiThemeProvider>
                    <React.Fragment>
                        <Header info="Personal Details" />


                        <CardM elevation={10} style={{ width: '50%', marginTop: '5%', marginLeft: 'auto', marginRight: 'auto' }} >
                            <div style={{ padding: '2%' }}>
                                Domain Select
                                </div>
                            <Divider />


                            <div style={{ display: 'flex', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%', marginBottom: '2%' }}>

                                <div style={{ width: '100%', }}>
                                    <FormGroup>

                                        <div style={{ display: 'flex', width: '100%', }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[0]} name="1" value="Agriculture" color="primary" />} label="Agriculture" />
                                            </div>



                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[1]} name="2" value="Artificial Intelligence" color="primary" />} label="Artificial Intelligence" />
                                            </div>


                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[2]} name="3" value="Art and Photography" color="primary" />} label="Art and Photography" />
                                            </div>



                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[3]} name="4" value="Education" color="primary" />} label="Education" />
                                            </div>


                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[4]} name="5" value="Fashion" color="primary" />} label="Fashion" />
                                            </div>


                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[5]} name="6" value="Food and Beverages" color="primary" />} label="Food and Beverages" />
                                            </div>


                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[6]} name="7" value="Heathcare" color="primary" />} label="Heathcare" />
                                            </div>



                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[7]} name="8" value="Marketing" color="primary" />} label="Marketing" />
                                            </div>



                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[8]} name="9" value="Sports" color="primary" />} label="Sports" />
                                            </div>


                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                            <div style={{ width: '40%', }}>
                                                <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[9]} name="10" value="Other" color="primary" />} label="Other" />
                                            </div>



                                        </div>
                                        <Divider />
                                    </FormGroup>
                                </div>




                            </div>
                        </CardM>
                    </React.Fragment>

                </MuiThemeProvider>


            </div>
        );
    }
}


export default DomainSet;