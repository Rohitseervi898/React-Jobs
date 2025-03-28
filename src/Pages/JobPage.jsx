
// import {useState,useEffect} from 'react'
import { useParams,useLoaderData } from 'react-router-dom';
import Spinner from '../component/Spinner';

const JobPage = () => {
    // const [job,setJob]=useState(null);
    const {id}=useParams();
    const job=useLoaderData();
    // const [loading,setLoading]=useState(true);

    // useEffect(()=>{
    //     const fetchjob=async()=> {
    //         try {
    //             const res=await fetch(`/api/jobs/${id}`);
    //             const data =await res.json();
    //             setJob(data);
    //         } catch (error) {
    //         console.log("error");
    //         }
    //         finally{
    //         setLoading(false);
    //         }
    //     }
    //     fetchjob();
    // },[])
    // console.log(job)
  return(
    <h1>{job.title}</h1>
  )
}
const jobloader=async ({params})=>{
    const res =await fetch(`/api/jobs/${params.id}`);
    const data=await res.json();
    return data;
}

export {JobPage as default, jobloader}