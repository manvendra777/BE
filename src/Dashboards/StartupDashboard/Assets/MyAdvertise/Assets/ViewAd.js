import React, { useState, Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
const useStyles = theme => ({
  root: {
    width: '84%',
    display:'flex',
    padding:2

  },
  input: {
    display: 'none',
  },

});

class ViewAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: []
    };
  }

  componentWillMount() {
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper variant="outlined" style={{width:'40%',height:'100%' }}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: 10 }} >Advertise Name
          </Typography>
            <TextField style={{ width: '60%',margin:1 }}
              id="outlined-multiline-static"
              variant="outlined"
              defaultValue={this.props.match.params.id}
            />
          </div>
          <Divider />
          <input accept="image/*" className={classes.input} id="icon-img-file" type="file" />
          <label htmlFor="icon-img-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <div style={{ display: 'flex' }}>
            <CardMedia
              style={{ height: 300, width: 300 }}
              image="http://blog.clickdimensions.com/wp-content/uploads/2017/05/BlogFeatureImage-5-Types-of-Online-Advertising-to-Generate-Leads.png"
              title="Contemplative Reptile"
            />
            <div style={{width:'50%',marginLeft: 'auto'}}>
            <TextField style={{ width: "100%", height:'100%' }}
              id="outlined-multiline-static"
              label="Discription"
              multiline
              rows={14}
              variant="outlined"
            />
            
            </div></div>
            <Divider />
            <div style={{display:'flex'}}>
            <Button style={{marginLeft:'auto'}}color="primary">Update</Button>
            </div>
          <Divider />
        </Paper>



        <div style={{marginLeft:'1%',width:'50%'}}>
        <Paper variant="outlined" style={{ }}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" color='primary' style={{ margin: 10 }} gutterBottom>
              Feedback
          </Typography>
          </div>
          <Divider />
          
          <div>      
             <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name: Raja Babu
              </div>
              <div>
                feedback: nice product ! nice product ! nice product ! nice product ! nice product !
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>
            <Paper style={{width:'100%',padding:'2%',marginTop:'1%',marginBottom:'1%'}}>
              <div>
                Name:
              </div>
              <div>
                feedback:
              </div>
            </Paper>

          </div>

        </Paper>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(ViewAd);