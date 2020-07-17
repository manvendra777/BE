import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import CardM from '@material-ui/core/Card';
import axios from 'axios';
import Cookies from 'js-cookie';

class InvestorSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.createDb = this.createDb.bind(this)
  };


  createDb() {
    var myid = Cookies.get('tempId');
    var response;
    axios.post('http://localhost:8083/entityAction/user/createRequestDB', null, { params: { id: myid } })
      .then(res => {
        response = res.data
        console.log(response);
      })
  }


  componentDidMount() {
    this.createDb()
    axios.post('http://localhost:8081/security/setInvestor?userName=' + Cookies.get('temp')) //Investor
    Cookies.remove('temp');
    Cookies.remove('tempId');
    window.location = "/loginPg"
  }

  render() {

    return (

      <MuiThemeProvider>
        <React.Fragment>
          <Header />
          <div style={{ margin: "auto", width: "40%", marginTop: 300, textAlign: "center" }}>
            <CardM style={{ width: 600, marginTop: 70, padding: 20 }} elevation={10}>
              <h1>Thank You </h1>
              <p>Your Data Is Submitted</p>
            </CardM>
          </div>
        </React.Fragment>

      </MuiThemeProvider>


    );

  }

}

export default InvestorSuccess;