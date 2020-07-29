import React, { Component } from 'react';
import Recommendation from './Assets/Recommendation/Recommendation'
import FindByDomain from './Assets/FindByDomains/FindByDomains'
class FindMentors extends Component {
    render() {
        return (
            <div>
                
                <FindByDomain/>
                <Recommendation/>
            </div>
        );
    }
}

export default FindMentors;