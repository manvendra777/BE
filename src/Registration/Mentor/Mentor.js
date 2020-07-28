import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Personal from './Assets/Personal';
import Professional from './Assets/Professional';
import Review from './Assets/Review';
import Domain from './Assets/Domain'
import Cookies from 'js-cookie'
import axios from 'axios'
import plant from './Assets/plants.png'
import moon from './Assets/moon.png'
import { render } from '@testing-library/react';
 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});



class Startup extends Component {
  constructor(props) {
    super(props);
    this.setDomain = this.setDomain.bind(this)
    this.setDomainC = this.setDomainC.bind(this)
    this.setDomainValues = this.setDomainValues.bind(this)
    this.setIncentiveG = this.setIncentiveG.bind(this)
    this.setId = this.setId.bind(this)
    this.createDb = this.createDb.bind(this)


    this.state = {
      activeStep: 0,
      id: '',
      firstName: "",
      lastName: "",
      email: "",
      phone_no: "",
      experience_in_Domain: 0,
      qualification: "",
      method_of_contact: "",
      what_makes_you_a_great_mentor: "",
      about_yourself: "",
      address: "",
      city: "",
      country: "",
      domainValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      domain: [],
      domainsC: [false, false, false, false, false, false, false, false, false, false],
      Incentive: ''
    }
  }

  componentWillMount() {
    document.body.style.backgroundColor = "#fbe9e7";
    this.setId();
  }
  setId() {
    this.setState({ id: Cookies.get('tempId') })
  }
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  setDomain(domain) {
    this.setState({ domain: domain })
  }
  setDomainC(domainC) {
    this.setState({ domainC: domainC })
  }
  setIncentiveG(incentive) {
    this.setState({ Incentive: incentive })
  }

  setDomainValues(values) {
    this.setState({ domainValue: values })
  }

  submitForm() {
    var self = this;
    axios.put('http://54.237.17.61/management/mentor/profile/add', {
      "id": this.state.id,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "domain": this.state.domain,
      "email": this.state.email,
      "phone_no": this.state.phone_no,
      "experience_in_Domain": this.state.experience_in_Domain,
      "qualification": this.state.qualification,
      "method_of_contact": this.state.method_of_contact,
      "what_makes_you_a_great_mentor": this.state.what_makes_you_a_great_mentor,
      "about_yourself": this.state.about_yourself,
      "address": this.state.address,
      "city": this.state.city,
      "country": this.state.country,
      "domainValue": this.state.domainValue,
      "Incentive": this.state.Incentive
    })
      .then(function (response) {
        self.createDb();
      })
  }
  createDb() {
    var myid = Cookies.get('tempId');
    var response;
    axios.post('http://54.237.17.61/entityAction/user/createRequestDB', null, { params: { id: myid } })
      .then(res => {
        response = res.data
        axios.post('http://54.237.17.61/security/setMentor?userName=' + Cookies.get('temp')).then(res => {
          Cookies.remove('temp');
          Cookies.remove('tempId');
          window.location = "/loginPg"
        }) //Mentor


      })
  }

  render() {
    const steps = ['Personal details', 'Professional details', 'Domain selection', 'Review'];


    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return <Personal
            handleChange={this.handleChange}
            values={values}
          />;
        case 1:
          return <Professional
            handleChange={this.handleChange}
            values={values}
          />;
        case 2:
          return <Domain
            setDomain={this.setDomain}
            setDomainValues={this.setDomainValues}
            setDomainC={this.setDomainC}
            setIncentiveG={this.setIncentiveG}
            values={values}
          />
        case 3:
          return <Review
            values={values} />;

        default:
          throw new Error('Unknown step');
      }
    }
    const { classes } = this.props;

    const { firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
      what_makes_you_a_great_mentor, about_yourself, address, city, country, domain, domainValue, domainsC, Incentive } = this.state;

    const values = {
      firstName, lastName, email, phone_no, experience_in_Domain, qualification, method_of_contact,
      what_makes_you_a_great_mentor, about_yourself, address, city, country, domain, domainValue, domainsC, Incentive
    };


    const handleNext = () => {
      this.setState({ activeStep: this.state.activeStep + 1 });

    };

    const handleBack = () => {
      this.setState({ activeStep: this.state.activeStep - 1 });
    };
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Mentor
          </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ overflowX: 'hidden', display: 'inline-block', opacity: 1, position: 'absolute', top: 0, bottom: 0, zIndex: -100, width: '100%' }}>
          <img style={{ width: '17%', marginTop: '3%', marginLeft: '86%' }} src={moon}></img>
          <div style={{ display: 'flex' }}>
            <img style={{ width: '40%', marginTop: '-2%', marginLeft: '12%' }} src={plant}></img>
            <img style={{ width: '40%', marginTop: '-2%', marginLeft: '-8%', }} src={plant}></img>
          </div>
        </div>

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Registration
          </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  {this.submitForm()}
                  <Typography variant="h5" gutterBottom>
                    Thank you for Registering with us.
                </Typography>
                  <Typography variant="subtitle1">
                    Your username is :  {Cookies.get('temp')}.
                </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(this.state.activeStep)}
                    <div className={classes.buttons}>
                      {this.state.activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {this.state.activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Startup);