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
import axios from 'axios';

const useStyles = (theme)=>({
  root: {
    width:300,
    margin: 10,
    padding: 0,
    whiteSpace:'normal'
},
media: {
    minHeight: 100,
},
});

 class InvestorCard extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
      myProfile: {},
      image: null
    };
    this.getImage = this.getImage.bind(this);
	
	}

	componentDidMount() {
		var id = this.props.id
		var persons;
    console.log("called33");
    console.log(this.props.id)
		axios.get(`http://localhost:8082/management/investor/profile/` + id)
			.then(res => {
				persons = res.data;
				console.log(persons);
				this.setState({ myProfile: persons })
      })
  }
  
componentWillMount() {
    this.getImage()
}
getImage() {
    var self = this;
    var mem;
    axios.get(`http://localhost:8082/management/investor/photos/` + this.props.id)
        .then(res => {
            mem = res.data;
            self.setState({ image: mem })
        })
}


render(){
    const { classes } = this.props;
    const showProfile = () => {
      window.location = "/startupDashboard/MyInvestor/" + this.props.id
    }
  return (
    <div>
       
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image={`data:image/jpeg;base64,${this.state.image}`}
          title={this.state.myProfile.firstName}
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.state.myProfile.firstName} {this.state.myProfile.lastName}
          </Typography>
          <Typography gutterBottom variant="h8">
            {this.state.myProfile.startupDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={showProfile}>
          Profile
        </Button>
      </CardActions>
    </Card>
    </div>
   
  );
}
}

export default withStyles(useStyles)(InvestorCard);
