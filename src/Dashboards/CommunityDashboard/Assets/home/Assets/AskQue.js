import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Card } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: theme.spacing(100),
      width:theme.spacing(100),
      margin:theme.spacing(2),

      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(30),
      },
    },
  postBox: {
      margin: theme.spacing(1,5,1,2),
      width:theme.spacing(95)
      
  },
      hd:{
          margin: theme.spacing(1,1,1,2),
      }
  });


class AskQue extends React.Component{

   constructor(props){
       super(props);
       this.state={
           question: "",
           description: "",
           AI: false,
           networking: false,
           web: false,
           android: false,
           other: false
       } 
       this.handleChange= this.handleChange.bind(this);
       this.handleSubmit= this.handleSubmit.bind(this); 
   }


   handleChange(e){
    const target= e.target;
    const value= target.type=== 'checkbox'? target.checked: target.value;
        const name= target.name;        
        this.setState({
            [name]: value
        })

   }

   handleSubmit(e){
    console.log("Current state is:"+ JSON.stringify(this.state));
    alert("Current state is:"+ JSON.stringify(this.state));
    e.preventDefault();

   }
   render(){
    const { classes } = this.props;

       return(
        <div className={classes.root}>
            <Card>
               
                   <Container>
                    <form onSubmit={this.handleSubmit}>
                    <TextField type= "text" name= "question" 
                                label="Ask Question"
                                 value= {this.state.question}
                                 helperText= "Ask Question"
                                 onChange={this.handleChange}
                                 style={{width: 500}}
                                 /><br/><br/>
                   
                    <TextareaAutosize
                                rowsMax={4} type= "textarea" name= "description" 
                                label="Description"
                                 value= {this.state.description}
                                 helperText= "Description"
                                 placeholder="Desciption"
                                 onChange={this.handleChange}
                                 style={{width: 500, height: 100}}
                                 /><br/>
                
                    <Button type="submit">Post</Button>
                    </form>
                   </Container>
                 
               </Card>
           </div>
       )
   }
}

export default withStyles(useStyles)(AskQue);
