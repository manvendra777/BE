import React, { Component } from 'react';
import sidebar from './sidebar.css'
import profile from './profile.jpeg'
import { Card } from '@material-ui/core';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <Card style={{ padding: '5%' }}>
                    <div className="text-center"> <img src={profile} width="100" className="rounded-circle" />
                        <h3 className="mt-2">Marcus Rashford</h3> <span className="mt-1 clearfix">Android Developer</span> <small className="mt-4">I am an android developer working at BruteForce startup in India.</small>
                        <div className="social-buttons mt-5">
                            <a href="https://www.linkedin.com/" target="_blank"><button className="neo-button" onclick="location.href='http://www.example.com'" type="button"><i className="fa fa-linkedin fa-1x"></i> </button> </a>
                            <a href="https://www.google.com/" target="_blank"><button className="neo-button"><i className="fa fa-google fa-1x"></i> </button></a>
                            <a href="https://www.youtube.com/" target="_blank">   <button className="neo-button"><i className="fa fa-youtube fa-1x"></i> </button></a>
                            <a href="https://www.twitter.com/" target="_blank"><button className="neo-button"><i className="fa fa-twitter fa-1x"></i> </button></a>
                        </div>
                    </div>
                </Card>
               
            </div>
        );
    }
}



export default Sidebar;