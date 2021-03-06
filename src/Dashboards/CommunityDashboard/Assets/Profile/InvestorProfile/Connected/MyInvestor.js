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



class TargetInvestor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myProfile: [],
            val: [],
            avg: '',
            setReq: false,
        };
        this.getInfo = this.getInfo.bind(this);
       
        this.sendRequest = this.sendRequest.bind(this)
        this.checkSentReq = this.checkSentReq.bind(this)
    }
 
    getInfo() {
        var id = this.props.match.params.id
        var persons;
        axios.get(`http://localhost:8082/management/investor/profile/` + id)
            .then(res => {
                persons = res.data;
                this.setState({ myProfile: persons })
                console.log(this.state.myProfile);
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
       
        this.checkSentReq()
      
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
                                Investor : {this.state.myProfile.firstName + ' ' + this.state.myProfile.lastName}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Id : {this.state.myProfile.id}
                            </Typography>
                           
                        
                        </Container>
                        <Divider style={{ marginLeft: 10, marginRight: 20 }} orientation="vertical" flexItem />

                     
                    </Container>
                    <Divider style={{ marginBottom: 10 }} />
                     <Divider style={{ marginTop: 10 }} />
                    <Container style={{ marginLeft: 10, marginTop: 10, display: 'block' }}>

                        <Typography variant="subtitle2" gutterBottom>
                            Min investment: {this.state.myProfile.min}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Max investment: {this.state.myProfile.max}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            email: {this.state.myProfile.email}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            phone: {this.state.myProfile.phone_no}
                        </Typography>

                        <Typography variant="subtitle2" gutterBottom>
                            age: {this.state.myProfile.age}
                        </Typography>
                      
                    </Container>

                </Card>
            </div>
       );
    }
}
export default withStyles(styles)(TargetInvestor);
