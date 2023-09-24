import { json } from "react-router-dom";

const getStoreJobApplication = ()=>{
    const StoreJobApplication = localStorage.getItem('job-applications');
    if(StoreJobApplication){
        return JSON.parse(StoreJobApplication);
    }
    return [];
}


const saveJobApplication =id=>{
    const StoreJobApplication = getStoreJobApplication();
    const exists = StoreJobApplication.find(jobId=> jobId === id);
    if(!exists){
           StoreJobApplication.push(id);
           localStorage.setItem('job-applications', JSON.stringify(StoreJobApplication))
    }

}

export {saveJobApplication}