import React, { Component } from 'react';
import FindByDomain from './Assets/FindByDomains/FindByDomains'
import  Recommendation from './Assets/Recommendation/Recommendation'
class FindStartup extends Component {
    render() {
        return (
            <div>
                <FindByDomain/>
                <Recommendation/>
                
            </div>
        );
    }
}

export default FindStartup;