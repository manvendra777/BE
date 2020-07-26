import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function Legal(props){
    return(
        <div className="ft-legal">
            <ul className="ft-legal-list">
                <li> <a href="#"> Terms &amp; Conditions </a> </li>
                <li> <a href="#"> Privacy Policy </a> </li>
                <li> © Copyright 2020 Kick Start up </li>
 
             </ul>

        </div>
    )
}

export default Legal;