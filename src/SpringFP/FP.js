import React from 'react'
import Header from './header'
import SpringFrontPage from './SpringFrontPage'

class FP extends React.Component {

    render(){
        return(
            <div >
                <Header/>
                <div>
                <SpringFrontPage/>
                </div>

            </div>
        )
    }
}
export default FP;