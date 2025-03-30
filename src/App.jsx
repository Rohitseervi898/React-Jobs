import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider,} from 'react-router-dom'
import React, { useState } from 'react'
import HomePages from './Pages/HomePages'
import MainLayout from './layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage,{jobloader} from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'


const App = () => {
  // Add new Job
  const addJob = async(newJob)=>{
    const res =await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  //delete Job
  const deleteJob=async(id)=>{
    const res =await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return;  
  }
  //update job
  const updateJob=async(job)=>{
    const res =await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return; 
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePages />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage AddJobSubmit={addJob} />} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobloader}/>
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobloader}/>
      <Route path='*' element={<NotFoundPage />} />
      
    </Route>
    
  )
  )
  return <RouterProvider router={router} />;
}
export default App