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



class TargetMentor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myProfile: [],
            val: [],
            avg: '',
            setReq: false,
        };
        this.getInfo = this.getInfo.bind(this);
        this.mapDomain = this.mapDomain.bind(this);
        this.getRating = this.getRating.bind(this)
        this.getRatingAv = this.getRatingAv.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
        this.checkSentReq = this.checkSentReq.bind(this)
    }
 
    getInfo() {
        var id = this.props.match.params.id
        var persons;
        axios.get(`http://localhost:8082/management/mentor/profile/` + id)
            .then(res => {
                persons = res.data;
                this.setState({ myProfile: persons })
                console.log(this.state.myProfile);
            })
    }
    mapDomain() {
        if (this.state.myProfile.domain != undefined) {
            return this.state.myProfile.domain.map((item, i) => (<Chip color="primary" style={{ marginLeft: 5, margin: 2 }} label={item} />))
        }
    }


    getRating() {
        var avg;
        axios.get(`http://localhost:8085/ratings/getRatingCount`, { params: { id: this.props.match.params.id } })
            .then(res => {
                avg = res.data;
                avg = avg.reverse()
                this.setState({ val: avg })
            })
    }
    getRatingAv() {
        var rate;
        axios.get(`http://localhost:8085/ratings/getRatingAverage`, { params: { id: this.props.match.params.id } })
            .then(res => {
                rate = res.data;
                this.setState({ avg: rate })
            })
    }

    sendRequest() {
        var myid = "5f07ae9d919bc64fc3513d0a";
        var response;
        axios.post('http://localhost:8083/entityAction/user/sendRequest', null, { params: { id: myid, target: this.props.match.params.id } })
            .then(res => {
                response = res.data
            })
    }
    checkSentReq() {
        var myid = "5f07ae9d919bc64fc3513d0a";
        var response;
        axios.get('http://localhost:8083/entityAction/user/checkRequest', { params: { id: myid, target: this.props.match.params.id } })
            .then(res => {
                response = res.data
                this.setState({ setReq: response })
            })
    }
    componentWillMount(){
        this.getRating()
        this.checkSentReq()
        this.getRatingAv()
        this.getInfo()
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card elevation={3}>
                    <Container className={classes.cont} style={{ marginBottom: 20 }}>
                        <Avatar alt="Sanket" className={classes.large} />
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

                        <Typography variant="subtitle2" gutterBottom>
                            experience_in_domain:{this.state.myProfile.experience_in_domain}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Description: {this.state.myProfile.about_yourself}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            method_of_contact: {this.state.myProfile.method_of_contact}
                        </Typography>
                    </Container>

                </Card>
            </div>
       );
    }
}
export default withStyles(styles)(TargetMentor);
