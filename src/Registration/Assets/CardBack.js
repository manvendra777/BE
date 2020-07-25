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
    height: 250,
  },
});

export default function Cardback(props) {
  const classes = useStyles();
  return (
    <Card style={{
      overflow: 'hidden',
      position: 'relative',
      width: '100 %',
    }} elevation={5} className={classes.root}>

      <CardActionArea style={{height:'100%'}}>
        <CardContent >
          <Typography variant="body1" color="textSecondary" component="p">
            {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
