import React, { Component } from 'react';
import Base from "./Assets/Base"
class Connections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res:0
        };
      }
      update=()=>{
          this.setState({res:1+this.state.res})
          console.log(this.state.res);
          
      }
render() {
        return (<div style={{right:"25%",float:"right",position:"relative"}}>
            <Base m={this.update}/>
            </div>
        );
    }
}

export default Connections;