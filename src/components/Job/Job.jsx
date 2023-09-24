import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, logo,job_title,company_name,remote_or_onsite,location,salary,job_type } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-5">
                    <button className="px-5 py-2 border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex"> 
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;