import React from 'react';
import {Navbar, Jobs} from './components/';
import { BrowserRouter as Router } from 'react-router-dom';
 
 
function App() {
    
        return (
            <Router>
                <Navbar/>
                <Jobs/>
            </Router>
        )
 
 
}

export default App;
