import React, { Component } from 'react';
import FindByCapacity from './FindByScale/FindByCapacity'
import FindInvestorByOF from './FindByScale/FindInvestorByOF'
import Recommendation from './Recommendation/Recommendation'

class FindInvestor extends Component {
    render() {
        return (
            <div>
                <FindByCapacity/>
                <FindInvestorByOF/>
                <Recommendation/>
            </div>
        );
    }
}

export default FindInvestor;