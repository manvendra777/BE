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
import Dialog from '@material-ui/core/Dialog';
import ViewAd from './ViewAd';
class AdvertiseCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
       

    }
    ViewMyAd(){
        window.location='/startupDashboard/viewAd/'+2
    }

    render() {
        return (
            <div style={{ margin: '1%', width: '45%', height: '50%' }}>
                <Card elevation={3} style={{ width: '100%', height: '100%', }}>
                    <CardActionArea style={{ width: '100%', height: '100%', margin:'0%'}} onClick={this.ViewMyAd}>
                      
                        <Typography variant="h5" color='primary' style={{ margin: '1%', display: 'flex' }} gutterBottom>
                            Advertise
                    </Typography>
                        <CardMedia
                            style={{ height: "100%" }}
                            image="http://blog.clickdimensions.com/wp-content/uploads/2017/05/BlogFeatureImage-5-Types-of-Online-Advertising-to-Generate-Leads.png"
                            title="Contemplative Reptile"
                        />
                        </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default AdvertiseCard;