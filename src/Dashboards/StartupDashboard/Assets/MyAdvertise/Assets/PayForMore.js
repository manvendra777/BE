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

class PayForMore extends Component {
    constructor(props) {
        super(props);
        this.createAdvertise = this.createAdvertise.bind(this)
    }
    createAdvertise() {
        this.props.method();

    }

    render() {
        return (
            <div style={{ display: 'flex', padding: 10 }}>
                <Card style={{ height: 200, width: 500, margin: 10 }}>
                    <div>
                        plan1
               </div>
                    <div>
                        Advertise Limit : 10
               </div>
                    <div>
                        Advertise Time : 10 days
               </div>
                    <div>
                        Pricing : 1000/-
               </div>
                    <div>
                        <Fab variant="extended" size="small">
                            Select
                            </Fab>
                    </div>
                </Card>
                <Card style={{ height: 200, width: 500, margin: 10 }}>
                    <div>
                        plan2
               </div>
                    <div>
                        Advertise Limit : 20
               </div>
                    <div>
                        Advertise Time : 20 days
               </div>
                    <div>
                        Pricing : 1500/-
               </div>
                    <div>
                        <Fab variant="extended" size="small">
                            Select
                            </Fab>
                    </div>
                </Card>
                <Card style={{ height: 200, width: 500, margin: 10 }}>
                    <div>
                        plan1
               </div>
                    <div>
                        Advertise Limit : 100
               </div>
                    <div>
                        Advertise Time : 30 days
               </div>
                    <div>
                        Pricing : 2000/-
               </div>
                    <div>
                        <Fab variant="extended" size="small">
                            Select
                            </Fab>
                    </div>
                </Card>
            </div>

        );
    }
}


export default PayForMore;