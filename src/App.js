import React, { Component, Fragment } from 'react';
import Home from './Comonents/Home.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
             <Home />
            </Fragment>
         );
    }
}
 
export default App;