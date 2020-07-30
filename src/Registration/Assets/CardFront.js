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
    width: 350,
    height: 350,
  },
  media: {
    height: 290,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card elevation={2} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <Typography
              style={{ flexGrow: 1, align: 'center',color:'#37474f' }}
              gutterBottom
              variant="h4"
             
            >
              {props.type}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
