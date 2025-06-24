import React from 'react'
import Slidbar from '../Slidbar/Slidbar.jsx'
import { Outlet } from "react-router-dom";
import './DashboardAdmin.css'
function DashboardAdmin() {
  return (
    <>
    <div className="Slidbarflex">
       <Slidbar/>
       <Outlet/>   
    </div>
    </>
  )
}

export default DashboardAdmin
