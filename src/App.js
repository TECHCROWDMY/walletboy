import React, {Component} from 'react';
  import {Navbar, Jobs} from './components/';
import { BrowserRouter as Router } from 'react-router-dom';
 
 
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
