import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary:{
      main:'#2196f3',
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
     <MuiThemeProvider theme={theme}>
     <App />
     </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
