import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Loading} from './Animations/Loading'

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
     <App/>
     </MuiThemeProvider>
     <Loading/>
     
  </React.StrictMode>,
  document.getElementById('root')
);
