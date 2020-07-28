import React from 'react'
import BookMarkedStartup from './BookMarkedStartup';
import ConnnectedStartup from './ConnectedStartup';

class Home extends  React.Component{
    render(){

        return(
            <div>
                <ConnnectedStartup/>
                <BookMarkedStartup/>
                
            </div>

        )
    }
}
export default Home;