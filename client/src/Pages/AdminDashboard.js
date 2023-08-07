import React from 'react'
import Adminmenu from './Adminmenu.js'

export default function AdminDashboard() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col md-3'>
            Admin Pannel
          <Adminmenu/>
          </div>
         
          <div className='col md-9'>
            content
          </div>

        </div>
      </div>
      
    </div>
  )
}
