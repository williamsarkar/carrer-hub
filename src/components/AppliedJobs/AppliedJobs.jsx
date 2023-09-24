import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setappliedJobs] = useState([]);

  useEffect(()=>{
     const storedJobId = getStoreJobApplication();
     if(jobs.length>0){
        const jobsApplied = jobs.filter(job=> storedJobId.include(job.id))
        setappliedJobs()
     }
  },[])

    return (
        <div>
            <h2>jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;