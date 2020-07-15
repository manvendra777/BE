import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AdvertiseCard from './Assets/AdvertiseCard'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import PaymentIcon from '@material-ui/icons/Payment';
import Dialog from '@material-ui/core/Dialog'
import CreateAd from './Assets/CreateAd'
import PayForMore from './Assets/PayForMore'
class MyAvertise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelOpen:false,
            isPayForeMoreOpen:false,
        }
        this.createAd = this.createAd.bind(this)
        this.createPayForMore = this.createPayForMore.bind(this)
    }
    createAd(){
        this.setState({isModelOpen:!this.state.isModelOpen});
    }
    createPayForMore(){
        this.setState({isPayForeMoreOpen:!this.state.isPayForeMoreOpen});
    }

    renderCard() {
        return <AdvertiseCard />
    }
    render() {
        return (

            <Paper style={{ width: '80%', marginLeft: '2%', height: '100%' }}>
                <Typography variant="h5" color='primary' style={{ padding: '1%' }}>
                    My Advertise
				</Typography>
                <Divider />
                <div style={{ marginLeft: '1%', padding: '2%' ,display:'flex'}}>

                    <Fab variant="extended" onClick={this.createAd}>
                        <AddIcon />
                        Create Ad
                    </Fab>
                    <Dialog open={this.state.isModelOpen} onClose={this.createAd}>
                        <CreateAd method={this.createAd}/>
                    </Dialog>
                    <Fab variant="extended" onClick={this.createPayForMore} style={{ marginLeft: '3%' }}>
                        <PaymentIcon />
                        Pay for more !
                    </Fab>
                    <Dialog open={this.state.isPayForeMoreOpen} onClose={this.createPayForMore}>
                        <PayForMore method={this.createPayForMore}/>
                    </Dialog>
                    <div style={{display:'flex',marginLeft:'auto',}}>                   
                    <Typography variant="h5" color='primary' style={{marginRight:20}}>
                       Ad remaning : 1
				    </Typography>
                    <Typography variant="h5" color='primary' >
                    Time : 11:10
				    </Typography>
                    </div>
                </div>
                <Divider />
                <div >
                    <div style={{ height: 550, display: 'block', width: '100%', }}>
                        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', minWidth: '100%', overflowY: 'scroll', height: '100%' }}>
                            <AdvertiseCard />
                            <AdvertiseCard />
                            <AdvertiseCard />
                            <AdvertiseCard />
                        </div>
                    </div>
                </div>


            </Paper>
        );
    }
}

export default MyAvertise;