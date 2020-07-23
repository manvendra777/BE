import React from 'react'
import Header from './header'
import SpringFrontPage from './SpringFrontPage'
import Footer from '../FrontPage/Footer'

class FP extends React.Component {

    render() {
        return (
            <div >
                <Header />
                <div>
                    <SpringFrontPage />
                </div>
            </div>
        )
    }
}
export default FP;