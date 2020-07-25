import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import './styles.scss';


const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  });

function SimpleDialog(props) {
    const classes = useStyles();
    const {open } = props;
  
    return (
      <Dialog 
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
        fullScreen={true} maxWidth = {'md'} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title"></DialogTitle>
        <div style={{height:200, overflow:"hidden"}}>
                 <div class="wrapper">
                      <div class="box-wrap">
                          <body >
                          <div class="box one"></div>
                          <div class="box two"></div>
                          <div class="box three"></div>
                          <div class="box four"></div>
                          <div class="box five"></div>
                          <div class="box six"></div>
                          </body>
                          
                      </div>
                  </div>
              </div>
      </Dialog>
    );
  }

SimpleDialog.propTypes = {
    open: PropTypes.bool.isRequired,
  };

 export const Loading = (props)=>{
    const {promiseInProgress} = usePromiseTracker({});
    // Loader Animation Start point
    const [open, setOpen] = React.useState(true);
    return(
        promiseInProgress &&(
            <div>
                  <SimpleDialog  open={open}  />
            </div>
        )
    );
};

