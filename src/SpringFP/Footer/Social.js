import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'



function Social(props){
    return(
        <div className="ft-social">
            <ul className="ft-social-list" >
                <li> <a href="https://en-gb.facebook.com/login/"  target="_blank" style={{fontStyle:'italic'}} className="fab fa-facebook" /> </li>
                <li> <a href="https://github.com/login"  target="_blank" style={{fontStyle:'italic'}} className="fab fa-github" /> </li>
                <li> <a href="https://in.linkedin.com/"  target="_blank" style={{fontStyle:'italic'}} className="fab fa-linkedin" /> </li>
                <li> <a href="https://twitter.com/?lang=en" target="_blank" style={{fontStyle:'italic'}} className="fab fa-twitter" /> </li>
            </ul>
           
        </div>
    )
}

export default Social;