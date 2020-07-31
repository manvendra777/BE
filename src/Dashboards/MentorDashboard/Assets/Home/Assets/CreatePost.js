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
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie'
const useStyles = theme => ({
    root: {
        width: '100%',
        margin: '0%'
    },
});


class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            adNamme: '',
            description: '',
            title: '',
            domain: props.postDomain
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.post = this.post.bind(this)
    }

    post() {
        var self = this;
        const formData = new FormData();
        formData.append('image', this.state.selectedFile);
        var id;
        console.log(this.state.selectedFile);
        axios({
            method: 'post',
            url: 'http://54.237.17.61/forum/createDiscussion',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {
            id = res.data;
            axios.post('http://54.237.17.61/forum/createDiscussionInfo', {
                "discussionId": id,
                "description": this.state.description,
                "header": this.state.title,
                "tag": this.state.domain,
                "idOfUser": Cookies.get('id'),
                "userId": Cookies.get('username') + ' (mentor)'
            }).then(res => {
                console.log(res.data);
                self.setState({ title: '', description: '', })
                toast.success("Post created successfully!", {
                    position: "bottom-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                window.location.reload();
            })
        })
    }
    onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div style={{ margin: 'auto' }}>
                    <h6>Photo: {this.state.selectedFile.name}</h6>
                </div>
            );
        } else {
            return (
                <div style={{ margin: 'auto' }}>
                    <h6>You can post photo by clicking on camera button</h6>
                </div>
            );
        }
    };


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
                <Card elevation={2}>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ marginLeft: '35%', marginRight: 'auto', marginTop: '1%' }}><Typography variant="h6" gutterBottom>
                            Create Post
                        </Typography></div>
                        <Divider />
                        <TextField type="text" name="title"
                            label="Title"
                            value={this.state.title}
                            onChange={(event) => { this.setState({ title: event.target.value }) }}
                            style={{ width: '94%', marginLeft: '3%', marginTop: '1%', marginBottom: '1%' }}

                        />
                        <Divider />
                        <div style={{ display: 'flex' }}>
                            <input onChange={this.onFileChange} accept="image/*" style={{ display: 'none' }} id="icon-img-file" type="file" />
                            <label htmlFor="icon-img-file">
                                <IconButton style={{ margin: '10%' }} color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>

                            </label>
                            {this.fileData()}
                        </div>
                        <Divider />
                        <TextField
                            style={{ width: '94%', margin: '3%' }}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            onChange={(event) => { this.setState({ description: event.target.value }) }}
                            rows={4}
                            value={this.state.description}
                            variant="outlined"
                        />
                        <br />
                        <div style={{ display: 'flex', padding: '2%', color: '#455a64' }}>
                            <div>
                                will be posted in : {this.props.postDomain}
                            </div>


                        </div>
                        <div style={{ marginLeft: 'auto',marginRight:'3%' }}>
                            <Button onClick={this.post}>post</Button>
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(CreatePost);
