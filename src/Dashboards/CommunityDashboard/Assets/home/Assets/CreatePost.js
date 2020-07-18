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
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const useStyles = theme => ({
    root: {
        width: '100%',
        margin:'0%'
    },
});


class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "",
            description: "",
            AI: false,
            networking: false,
            web: false,
            android: false,
            other: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        console.log("Current state is:" + JSON.stringify(this.state));
        alert("Current state is:" + JSON.stringify(this.state));
        e.preventDefault();

    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Card elevation={5}>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ marginLeft: '35%', marginRight: 'auto', marginTop:'1%' }}><Typography variant="h6" gutterBottom>
                            Create Post
                        </Typography></div>

                        <Divider />
                        <TextField type="text" name="question"
                            label="Title"
                            value={this.state.question}
                            onChange={this.handleChange}
                            style={{ width: '94%', marginLeft: '3%', marginTop: '1%', marginBottom: '1%' }}

                        />
                        <Divider />
                        <input accept="image/*" style={{ display: 'none' }} id="icon-img-file" type="file" />
                        <label htmlFor="icon-img-file">
                            <IconButton style={{ margin: '10%' }} color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>

                        </label>
                        <Divider />
                        <TextField
                            style={{ width: '94%', margin: '3%' }}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            onChange={this.handleChange}
                            rows={4}
                            variant="outlined"
                        />
                        <br />
                    </form>
                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(CreatePost);
