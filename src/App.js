import React, {Component} from 'react';
import Jobs from './components/Job-Card/';
import './App.css';
import Navbar from './components/Navbar/';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about';

class App extends Component {
    state = {
        jobs: []
    };
    componentDidMount() {

        fetch(`https://remotive.io/api/remote-jobs`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ 
                    jobs: data.jobs 
                })
            })
            .catch(console.log)
    }
     

    render() {
        return (
            <Router>
                <Navbar/>
                <Jobs jobs={this.state.jobs} />
          </Router>
        )
    }
 
}

export default App;
