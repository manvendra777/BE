import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles({
    root: {
        width:400,
        margin: 10,
        padding: 0,
     
        float:'left'
    },
    media: {
        height: 200,
    },
});


export default function MediaCard(props) {
    const classes = useStyles();

    
    const openStartupPage=()=>{
        
        window.location="/InvestorDashboard/TargetStartup/"+props.id
    }

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={openStartupPage}>
                <CardMedia
                    className={classes.media}
                    image="https://specials-images.forbesimg.com/imageserve/1211231028/960x0.jpg?fit=scale"
                    title="Contemplative Reptile"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.firstname + ' ' + props.lastname}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.startupName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.startupDescription}
                    </Typography>

                    <div style={{ width: '100%',padding: 0, flex: 1, display: 'flex', overflow: 'hidden',position:'relative' }}>
                    <div style={{ margin: 5, display: 'flex', padding: 1, whiteSpace: 'normal',overflow: 'hidden',bottom:-20 }}>
                        {props.domain.map((item, i) => {
                             return <Chip style={{ marginLeft: 5, marginRight: 5 }} label={item} color="primary" />
                        })}
                    </div>
                    </div>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        <div >
                            {props.about}
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
