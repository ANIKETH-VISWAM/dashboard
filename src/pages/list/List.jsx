import React from 'react'
import "./List.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Dboard from '../../components/dboard/Dboard'


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <Dboard/>

      </div>
    </div>
  )
}

export default List