import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width:400,
    height:330,
  },
  media: {
    height: 250,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{margin:5}}>
            {props.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
