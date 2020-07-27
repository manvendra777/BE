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

class MentorCard extends Component {
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
        axios.get(`http://54.237.17.61/management/investor/photos/` + this.props.id)
            .then(res => {
                mem = res.data;
                self.setState({ image: mem })
            })
    }

    render() {
        const { classes } = this.props;
        const openMentorPage = () => {


            var myid = Cookies.get('id');
            var response;
            axios.get('http://54.237.17.61/entityAction/user/checkIfAdded', { params: { id: myid, target: this.props.id } })
                .then(res => {
                    response = res.data
                    if (response) {
                        window.location = "/startupDashboard/MyInvestor/" + this.props.id
                    } else {
                        window.location = "/startupDashboard/TargetInvestor/" + this.props.id
                    }

                })

        }
        return (
            <Card className={classes.root}>
                <CardActionArea onClick={openMentorPage}>
                    <CardMedia
                        className={classes.media}
                        image={`data:image/jpeg;base64,${this.state.image}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.firstname + ' ' + this.props.lastname}
                        </Typography>

                        <div style={{ width: '100%', padding: 0, flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ margin: 5, display: 'flex', padding: 1, whiteSpace: 'normal', overflow: 'hidden', bottom: -20 }}>

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
                    <Button onClick={openMentorPage} size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(MentorCard);