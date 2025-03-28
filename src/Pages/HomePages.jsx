import React from 'react'
// import Navbar from '../component/Navbar.jsx'
import Hero from '../component/Hero.jsx'
import HomeCards from '../component/HomeCards.jsx'
import JobListings from '../component/JobListings.jsx'
import ViewAllJobs from '../component/ViewAllJobs.jsx'

const HomePages = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePages