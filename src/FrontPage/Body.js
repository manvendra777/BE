import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Body(props){
    return(
        <div className="ft-main">
            <div className="ft-main-item">
                <h2 className="ft-title">About</h2>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div className="ft-main-item">
                <h2 className="ft-title">Users</h2>
                <ul>
                    <li><a href="#">Startup</a></li>
                    <li><a href="#">Mentor</a></li>
                    <li><a href="#">Investor</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>

            <div className="ft-main-item">
                <h2 className="ft-title">Contact</h2>
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Sales</a></li>
                    <li><a href="#">Advertise</a></li>
                </ul>
            </div>

            <div className ="ft-main-item">
                <h2 className ="ft-title">Stay Updated</h2>
                <p> Subscribe to our newsletter to get our latest news.</p>
                <form>
                    <input type="email" name="email" placeholder="Email ID"/>
                    <input type="submit" value="Subscribe" />
                </form>

            </div>

        </div>
    )
}

export default Body