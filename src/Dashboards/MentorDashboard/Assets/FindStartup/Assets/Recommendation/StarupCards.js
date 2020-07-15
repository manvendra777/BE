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
        minWidth:300,
        margin: 10,
        padding: 0,
        whiteSpace:'normal'
    },
    media: {
        minHeight: 100,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://specials-images.forbesimg.com/imageserve/1211231028/960x0.jpg?fit=scale"
                    title="Contemplative Reptile"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        Raj Malhotra
          </Typography>
                    <div style={{ margin: 5, display: 'flex',padding:1,whiteSpace:'normal'}}>
                        <Chip style={{marginLeft:5,marginRight:5}} label="Machine Learning" color="primary" />
                        <Chip style={{marginLeft:5,marginRight:5}} label="Marketing" color="primary" />
                        <Chip style={{marginLeft:5,marginRight:5}} label="Sports" color="primary" />
                        <Chip style={{marginLeft:5,marginRight:5}} label="Space" color="primary" />
                        <Chip style={{marginLeft:5,marginRight:5}} label="Space" color="primary" />
                        <Chip style={{marginLeft:5,marginRight:5}} label="Space" color="primary" />
                    </div>

                    <Typography variant="body2" color="textSecondary" component="p" >
                        <div >
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                           
              </div>

                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
