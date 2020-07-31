import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import axios from 'axios'
import Cookies from 'js-cookie'
const styles = theme => ({
    root: {
        width: 400,
        margin: 10,
        padding: 0,

        float: 'left'
    },
    media: {
        height: 200,
    },
});

class StartupCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
        this.getImage = this.getImage.bind(this);
    }
    componentWillMount() {
        this.getImage()
    }
    getImage() {
        var self = this;
        var mem;
        axios.get(`http://50.19.216.143/management/startup/photos/` + this.props.id)
            .then(res => {
                mem = res.data;
                self.setState({ image: mem })
            })
    }

    render() {
        const { classes } = this.props;
        const openStartupPage = () => {
            var myid = Cookies.get('id');
            var response;
            axios.get('http://50.19.216.143/entityAction/user/checkIfAdded', { params: { id: myid, target: this.props.id } })
                .then(res => {
                    response = res.data
                    if (response) {
                        window.location = "/mentorDashboard/MyStartup/" + this.props.id
                    } else {
                        window.location = "/mentorDashboard/TargetStartup/" + this.props.id
                    }

                })
           
        }
        return (
            <Card className={classes.root}>
                <CardActionArea onClick={openStartupPage}>
                    <CardMedia
                        className={classes.media}
                        image={`data:image/jpeg;base64,${this.state.image}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.sname}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.props.firstname + ' ' + this.props.lastname}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" >

                            {this.props.des}
                        </Typography>

                        <div style={{ width: '100%', padding: 0, flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ margin: 5, display: 'flex', padding: 1, whiteSpace: 'normal', overflow: 'hidden', bottom: -20 }}>
                                {this.props.domain.map((item, i) => {
                                    return <Chip style={{ marginLeft: 5, marginRight: 5 }} label={item} color="primary" />
                                })}
                            </div>
                        </div>

                        <Typography variant="body2" color="textSecondary" component="p" >
                            <div >
                                {this.props.about}
                            </div>

                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    <Button onClick={openStartupPage} size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        );
    }
}
export default withStyles(styles)(StartupCard);