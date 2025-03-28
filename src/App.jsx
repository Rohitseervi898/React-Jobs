import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider,
} from 'react-router-dom'
import React, { useState } from 'react'
import HomePages from './Pages/HomePages'
import MainLayout from './layouts/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage,{jobloader} from './Pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePages />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage />} loader={jobloader}/>
    <Route path='*' element={<NotFoundPage />} />
    
  </Route>
  
)
)
const App = () => {
  return <RouterProvider router={router} />;
}
export default App