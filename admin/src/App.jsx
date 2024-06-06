import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Routes,  Route } from "react-router-dom"
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import Orders from "./pages/Orders/Orders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url = 'https://foodie-backend-v2hm.onrender.com'
  return (
    <div>
      <Navbar/>
        <ToastContainer/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/Order' element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App