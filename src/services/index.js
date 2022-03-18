import React, { Component } from 'react';


class fetchJobs extends Component {

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
    
    render() {}
}

export default fetchJobs




