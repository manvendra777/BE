import React, { Component } from 'react';
import FindByDomain from './Assets/FindByDomains/FindByDomains'
import Recommendation from './Assets/Recommendation/Recommendation'

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