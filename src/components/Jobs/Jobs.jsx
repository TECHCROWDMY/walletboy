import React, { useEffect, useState } from "react";
import './style.css';
// import fetchJobs from '../../services'

const Jobs = () => { 

    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        fetch('https://remotive.io/api/remote-jobs')
        .then(res => res.json())
        .then((data) => setItems(data.jobs)
        )
        .catch(console.log)
    })

    return (
        <div class="grid">
        
            {items.map((job) => (
                <a href={job.url} target="_blank" rel="noreferrer">
                <div class="card">
                    <div class="card-body">
                        <div class="logo">
                            <img src={job.company_logo} alt="company logo"/>
                        </div>
                        <div class="job-info">
                            <h5 class="card-title">{job.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{job.company_name}</h6>
                        </div>
                        
                    </div>
                </div></a>
            ))}
        </div>
    )



};

export default Jobs

 

// const Jobs = ({jobs}) => {
//   return (
//     <div>Jobs</div>
//   )
// }
 