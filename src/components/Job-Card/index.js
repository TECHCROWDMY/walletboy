import React from 'react'
import './style.css'


const Jobs = ({jobs}) => {
    return (
        <div class="grid">
        
            {(jobs).map((job) => (
                <a href={job.url} target="_blank">
                <div class="card">
                    <div class="card-body">
                        <div class="logo">
                            <img src={job.company_logo} />
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