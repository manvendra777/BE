import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
const useStyles = (theme)=>({
  root: {
    minWidth: 200,
  },
  media: {
    height: 120,
  },
});

class ConnectedMentor extends Component {
    render() {
        const { classes } = this.props;

  return (
    <div>
       <Typography gutterBottom variant="h5" component="h2">
            Mentors
          </Typography>
          <Divider style={{marginBottom: 5}}/> 
    <div style={{ width: '100%',padding: 0, flex: 1, display: 'flex', overflow: 'auto', }}>
    <div style={{ display: 'flex', overflowX: 'scroll',background:'#DCDCDC',padding:10 }}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://specials-images.forbesimg.com/imageserve/1211231028/960x0.jpg?fit=scale"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Profile
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
  );
}
}

export default withStyles(useStyles)(ConnectedMentor);
