import React, { Component } from 'react';
import './styles.scss'
class Loading extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div class="📦"></div>
                    <div class="📦"></div>
                    <div class="📦"></div>
                    <div class="📦"></div>
                    <div class="📦"></div>
                </div>
            </div>
        );
    }
}
export default Loading;
