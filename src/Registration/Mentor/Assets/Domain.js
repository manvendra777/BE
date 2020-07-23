import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { AppBar, Divider } from 'material-ui';
import CardM from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  });

class DomainSet extends Component {
    constructor(props) {
        super(props);
        this.getList = this.getList.bind(this)
        this.setIncentive = this.setIncentive.bind(this)
        this.setValue = this.setValue.bind(this)

        this.state = {
            domains: props.values.domain,
            domainsC: props.values.domainsC,
            domainsValue: props.values.domainValue,
            Incentive: props.values.Incentive
        }
    }

    componentWillUnmount() {
        this.props.setDomain(this.state.domains)
        this.props.setDomainValues(this.state.domainsValue)
        this.props.setDomainValues(this.state.domainsValue)
        this.props.setDomainC(this.state.domainsC)
        this.props.setIncentiveG(this.state.Incentive)
    }


    getList = (event) => {

        let domain_list = this.state.domains;
        let domain_value = this.state.domainsValue;
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
    };
    setIncentive(val) {
        this.setState({ Incentive: val })
    }

    setValue(val, n) {
        let domianVal = this.state.domainsValue;
        domianVal[n] = val;
        this.setState({ domainsValue: domianVal })
    }


    render() {
        const { values, handleChange } = this.props;
        const { classes } = this.props;
        return (
            <div>

                <MuiThemeProvider>
                    <React.Fragment className={classes.root}>

                                <FormGroup className>

                                    <div style={{ display: 'flex', width: '100%', }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[0]} name="1" value="Agriculture" color="primary" />} label="Agriculture" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[0]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[0]}
                                            onChange={(e, val) => this.setValue(val, 0)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[1]} name="2" value="Artificial Intelligence" color="primary" />} label="Artificial Intelligence" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[1]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[1]}
                                            onChange={(e, val) => this.setValue(val, 1)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[2]} name="3" value="Art and Photography" color="primary" />} label="Art and Photography" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[2]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[2]}
                                            onChange={(e, val) => this.setValue(val, 2)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[3]} name="4" value="Education" color="primary" />} label="Education" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[3]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[3]}
                                            onChange={(e, val) => this.setValue(val, 3)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[4]} name="5" value="Fashion" color="primary" />} label="Fashion" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[4]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[4]}
                                            onChange={(e, val) => this.setValue(val, 4)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[5]} name="6" value="Food and Beverages" color="primary" />} label="Food and Beverages" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[5]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[5]}
                                            onChange={(e, val) => this.setValue(val, 5)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[6]} name="7" value="Heathcare" color="primary" />} label="Heathcare" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[6]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[6]}
                                            onChange={(e, val) => this.setValue(val, 6)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[7]} name="8" value="Marketing" color="primary" />} label="Marketing" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[7]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[7]}
                                            onChange={(e, val) => this.setValue(val, 7)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[8]} name="9" value="Sports" color="primary" />} label="Sports" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[8]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[8]}
                                            onChange={(e, val) => this.setValue(val, 8)}
                                        />

                                    </div>
                                    <Divider />
                                    <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                        <div style={{ width: '40%', }}>
                                            <FormControlLabel onClick={this.getList} control={<Checkbox checked={this.state.domainsC[9]} name="10" value="Other" color="primary" />} label="Other" />
                                        </div>

                                        <Slider
                                            style={{ width: '50%', marginTop: 'auto', marginBottom: 'auto' }}
                                            defaultValue={this.state.domainsValue[9]}
                                            //getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                            disabled={!this.state.domainsC[9]}
                                            onChange={(e, val) => this.setValue(val, 9)}
                                        />

                                    </div>
                                    <Divider />


                                    <div style={{ display: 'flex', width: '80%', marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                                        <div style={{ width: '40%', }}>
                                            Incentive Expectation
                                                </div>

                                      <TextField
                                            required
                                            className ={classes.root}
                                            id="outlined-required"
                                            label="Required"
                                            placeholder = "Amount"
                                            variant="outlined"
                                            onChange={(e, val) => this.setIncentive(val)}
                                        />
                                    
                                      
                                    </div>
                                </FormGroup>
                    </React.Fragment>
                </MuiThemeProvider>


            </div >
        );
    }
}


export default withStyles(styles)(DomainSet);