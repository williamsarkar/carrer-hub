import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FerutedJobs = () => {

    const[jobs, setJobs]= useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    },[])

    return (
        <div>
            <div className="text-center">
            <h2 className="text-5xl ">Featured Jobs: {jobs.length}</h2>
            <p className="">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
         
         <div className="grid grid-cols-2 gap-6 mt-12">
            {
                jobs.map(job=> <Job key={job.id} job={job}></Job> )
            }
         </div>

        </div>
    );
};

export default FerutedJobs;