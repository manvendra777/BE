import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ViewAd from './ViewAd';

class CreateAd extends Component {
    constructor(props) {
        super(props);
        this.createAdvertise = this.createAdvertise.bind(this)
    }
    createAdvertise(){
        this.props.method();

    }

    render() {
        return (
            <Paper variant="outlined">
            <div style={{ display: 'flex' }}>
              <Typography variant="h5" color='primary' style={{ margin: 10 }} >Advertise Name
            </Typography>
              <TextField style={{ width: '60%',margin:1 }}
                id="outlined-multiline-static"
                variant="outlined"
               
              />
            </div>
            <Divider />
            <input accept="image/*" style={{display:'none'}} id="icon-img-file" type="file" />
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
              <Button style={{marginLeft:'auto'}}color="primary" onClick={this.createAdvertise}>Create</Button>
              </div>
            <Divider />
          </Paper>
  
        );
    }
}


export default CreateAd;