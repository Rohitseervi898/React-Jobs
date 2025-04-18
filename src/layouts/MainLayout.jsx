import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {Outlet} from 'react-router-dom';
import Navbar from '../component/Navbar';

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer />
    </>
    
  )
}

export default MainLayout