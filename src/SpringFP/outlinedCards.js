import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { render } from "@testing-library/react";

const useStyles = (theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontFamily: "Special Elite",
  },
  pos: {
    marginBottom: 12,
  },
});

class OutlinedCard extends Component {
  constructor(props) {
    super(props);
  }

  //const {bull} = <span className={classes.bullet}>•</span>;
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} variant="outlined">
        <Card>
          <div>
            <CardContent>
              <div className={classes.title} color="textSecondary" gutterBottom>
                <Typography
                  style={{
                    fontFamily: "Special Elite",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Developers
                </Typography>
              </div>
              <div variant="h5" component="h2">
                <Typography>benevolent</Typography>
              </div>
              <div className={classes.pos} color="textSecondary">
                <Typography>adjective</Typography>
              </div>
              <div variant="body2" component="p">
                <Typography>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </div>
            </CardContent>
          </div>
          <div>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(OutlinedCard);
