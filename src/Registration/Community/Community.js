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
import Review from './Assets/Review';
import Cookies from 'js-cookie'
import axios from 'axios'
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
    this.setId = this.setId.bind(this)
    this.createDb = this.createDb.bind(this)
    this.state = {
      activeStep: 0,
      id: '',
      firstName: "",
      lastName: "",
      intrest: ''
    }
  }

  componentWillMount() {
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


  submitForm() {
    var self = this;
    axios.put('http://54.237.17.61/management/community/profile/add', {
      "id": this.state.id,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "intrest": this.state.intrest,
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
        axios.post('http://54.237.17.61/security/setCommunity?userName=' + Cookies.get('temp')).then(
          res => {
            Cookies.remove('temp');
            Cookies.remove('tempId');
            window.location = "/loginPg"
          })
      })
  }


  render() {
    const steps = ['Personal details', 'Review'];


    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return <Personal
            handleChange={this.handleChange}
            values={values}
          />;
        case 1:
          return <Review
            values={values} />;
        default:
          throw new Error('Unknown step');
      }
    }
    const { classes } = this.props;

    const { firstName, lastName, interest } = this.state;

    const values = { firstName, lastName, interest };


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
              Community
          </Typography>
          </Toolbar>
        </AppBar>
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