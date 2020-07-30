import React, { Component } from 'react';
import FindByCapacity from './FindByCapacity'
import FindInvestorByOF from './FindInvestorByOF'

class FindInvestor extends Component {
    render() {
        return (
            <div>
                <FindByCapacity/>
                <FindInvestorByOF/>
            </div>
        );
    }
}

export default FindInvestor;