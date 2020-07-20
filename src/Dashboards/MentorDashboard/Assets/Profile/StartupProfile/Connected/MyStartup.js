import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import RatingStats from './Rating/RatingStats'
import Cookies from 'js-cookie'


const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1, 1, 1, 1),
            padding: theme.spacing(1, 0, 2, 0),
            width: '80%',
            marginLeft: '2%',
            marginTop: '5%',
        }
    },
    cont: {
        display: "flex",
        margin: "5px 0px 0px 5px ",
        alignItems: "center",
        marginBotton: 200
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    spc: {
        display: "",
        alignText: "center"
    }
});



class MyStartup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myProfile: [],
            val: [],
            avg: '',
            setReq:false,
            image:null
        };
        this.mapDomain = this.mapDomain.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getLogs = this.getLogs.bind(this)
        this.getImage = this.getImage.bind(this)
        this.getRating = this.getRating.bind(this)
        this.getRatingAv = this.getRatingAv.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
        this.checkSentReq= this.checkSentReq.bind(this)
    }
    componentWillMount() {
        this.getInfo()
        this.getRating()
        this.getRatingAv()
        this.checkSentReq()
        this.getImage()
    }
    getImage() {
        var self = this;
        var mem;
        axios.get(`http://54.237.17.61/startup/photos/` + this.props.match.params.id)
            .then(res => {
                mem = res.data;
                self.setState({ image: mem })
            })
    }
    getInfo() {
        var id = this.props.match.params.id
        var persons;
        axios.get(`http://54.237.17.61/startup/profile/` + id)
            .then(res => {
                persons = res.data;
                this.setState({ myProfile: persons })
            })
    }
    getLogs() {
        console.log(this.state.myProfile);
    }
    mapDomain() {
        if (this.state.myProfile.domain != undefined) {
            return this.state.myProfile.domain.map((item, i) => (<Chip color="primary" style={{ marginLeft: 5, margin: 2 }} label={item} />))
        }
    }


    getRating() {
        var avg;
        axios.get(`http://54.237.17.61/ratings/getRatingCount`, { params: { id: this.props.match.params.id } })
            .then(res => {
                avg = res.data;
                avg = avg.reverse()
                this.setState({ val: avg })
            })
    }
    getRatingAv() {
        var rate;
        axios.get(`http://54.237.17.61/ratings/getRatingAverage`, { params: { id: this.props.match.params.id } })
            .then(res => {
                rate = res.data;
                console.log(rate);
                this.setState({ avg: rate })
            })
    }

    sendRequest() {
        var myid = Cookies.get('id')
        var response;
        axios.post('http://54.237.17.61/entityAction/user/sendRequest', null,{ params: { id: myid, target: this.props.match.params.id } })
            .then(res => { 
                response = res.data 
                console.log(response);
                
            })
    }
    checkSentReq(){
        var myid = Cookies.get('id')
        var response;
        axios.get('http://54.237.17.61/entityAction/user/checkRequest',{ params: { id: myid, target: this.props.match.params.id } })
            .then(res => { 
                response = res.data 
                console.log(response);
                this.setState({setReq:response})
            })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card elevation={3}>
                    <Container className={classes.cont} style={{ marginBottom: 20 }}>
                        <Avatar alt="Sanket" src={`data:image/jpeg;base64,${this.state.image}`} className={classes.large} />
                        <Divider style={{ marginLeft: 10 }} orientation="vertical" flexItem />
                        <Container className={classes.spc}>
                            <Typography variant="h4" gutterBottom>

                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Mentor : {this.state.myProfile.firstName + ' ' + this.state.myProfile.lastName}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Id : {this.state.myProfile.id}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Address: {this.state.myProfile.address + ', ' + this.state.myProfile.city + ', ' + this.state.myProfile.postalCode + ', ' + this.state.myProfile.country}
                            </Typography>
                            <div>{this.mapDomain()}</div>
                        </Container>
                        <Divider style={{ marginLeft: 10, marginRight: 20 }} orientation="vertical" flexItem />

                        <RatingStats ratings={this.state.val} ratingAverage={Math.round(this.state.avg * 10) / 10} raterCount={this.state.val.reduce((a, b) => a + b, 0)} />,

                    </Container>
                    <Divider style={{ marginBottom: 10 }} />
                    <Button disabled={this.state.setReq} style={{ marginLeft: 30 }} size="small" onClick={this.sendRequest} color="primary">Send Invitation</Button>
                    <Divider style={{ marginTop: 10 }} />
                    <Container style={{ marginLeft: 10, marginTop: 10, display: 'block' }}>

                        <Typography variant="subtitle2" gutterBottom>
                            qualification: {this.state.myProfile.qualification}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            email: {this.state.myProfile.email}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            phone: {this.state.myProfile.phone_no}
                        </Typography>

                    </Container>

                </Card>
            </div>
        );
    }
}
export default withStyles(styles)(MyStartup);
