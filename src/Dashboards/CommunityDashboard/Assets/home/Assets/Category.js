import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin:20,
    width:'80%'
  },
  media: {
    height: 400,
  },
});

export default function Category(props) {
  const classes = useStyles();
  const gotoFeedSection=()=>{
    window.location = "/communityDashboard/Feed/" + props.name
  }
  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea onClick={gotoFeedSection}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography color="primary" gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}