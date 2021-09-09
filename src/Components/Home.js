import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="omain">
            <h1>Edyoda Players App</h1>
            <h3>Hello Everyone!</h3>
                <h3> My Name is Horeen Hashmi , in this page i have listed out the data of cricket players</h3>
               <h3>  Lets have a look.</h3>
            <Link to={{pathname:"/players"}}><button>Click Here!</button></Link>
          </div> );
    }
}
 
export default Home;