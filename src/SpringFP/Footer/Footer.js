import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import './Body'
import './Social'
import './Legal'
import Body from './Body';
import Legal from './Legal';
import Social from './Social';

function Footer(props) {
    return (
        <div className="footer" >
         
            <Body/>
            <Social/>
            <Legal/>
      </div>

    )
}

export default Footer