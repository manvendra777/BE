import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cookies from 'js-cookie';
import { useSpring, animated } from 'react-spring'
import './styles.css'
const useStyles = makeStyles({
  root: {
    margin: 20,
    width: '80%'
  },
  media: {
    height: 400,
  },
});
const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${0}deg) rotateY(${0}deg) scale(${s})`

export default function Category(prop) {
  const classes = useStyles();
  const gotoFeedSection = () => {
    Cookies.set('ad', prop.name)
    window.location = "/communityDashboard/Feed/" + prop.name
  }
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 500, friction: 40 } }))
  return (
    <animated.div
      className={classes.root}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}

      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Card elevation={2} >
        <CardActionArea onClick={gotoFeedSection}>
          <CardMedia
            className={classes.media}
            image={prop.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography color="primary" gutterBottom variant="h5" component="h2">
              {prop.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </animated.div>
  );
}