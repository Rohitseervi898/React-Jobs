import React, { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import HomeCards from './component/HomeCards.jsx'
import JobListing from './component/JobListings.jsx'
import ViewAllJobs from './component/ViewAllJobs.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListing />
    <ViewAllJobs />
    </>
  )
}
export default App