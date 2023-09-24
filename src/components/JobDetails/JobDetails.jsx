import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = ()=>{

         saveJobApplication(id)

        toast('you have applied successfully')
    }


    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">


                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of:{job}</h2>
                    
                </div>
                <div className="border">
                    <h2 className="2xl">Side Things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                   
                </div>
            </div>
            
        </div>
            

    );
};

export default JobDetails;