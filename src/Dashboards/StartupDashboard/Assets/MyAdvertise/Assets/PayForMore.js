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
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';


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
            <div style={{ display: 'flex', }}>
                <div>
                    <PricingTable highlightColor='#2196f3'>
                        <PricingSlot buttonText='TRY IT FREE' title='FREE' priceText='Rs 0/month'>
                            <PricingDetail> <b>1</b> Advertise</PricingDetail>
                            <PricingDetail> <b>2 days</b> Advertise Time</PricingDetail>
                            <PricingDetail strikethrough> <b>premium mentors</b></PricingDetail>
                        </PricingSlot>
                    </PricingTable>
                </div>
                <div>
                    <PricingTable highlightColor='#00bcd4'>
                        <PricingSlot highlighted buttonText='Select' title='BASIC' priceText='Rs 240/month'>
                            <PricingDetail> <b>5</b> Advertise</PricingDetail>
                            <PricingDetail> <b>7 days</b> Advertise Time</PricingDetail>
                            <PricingDetail> <b>1</b> premium mentor</PricingDetail>
                        </PricingSlot>
                    </PricingTable>
                </div>
                <div>
                    <PricingTable highlightColor='#00bcd4'>
                        <PricingSlot buttonText='Select' title='PROFESSIONAL' priceText='Rs 500/month'>
                            <PricingDetail> <b>10</b> Advertise</PricingDetail>
                            <PricingDetail> <b>30 days</b> Advertise Time</PricingDetail>
                            <PricingDetail> <b>10</b> premium mentor</PricingDetail>
                        </PricingSlot>
                    </PricingTable>
                </div>
                <div>
                    <PricingTable highlightColor='#00bcd4'>
                        <PricingSlot highlighted buttonText='Select' title='ENTERPRISE' priceText='Rs 1000/month'>
                            <PricingDetail> <b>100</b> Advertise</PricingDetail>
                            <PricingDetail> <b>90 days</b> Advertise Time</PricingDetail>
                            <PricingDetail> <b>Unlimited</b> premium mentor</PricingDetail>
                        </PricingSlot>
                    </PricingTable>
                    </div>

            </div>

        );
    }
}


export default PayForMore;