import React from 'react'
import "./Single.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Tabular from '../../components/table/Table'

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singlecontainer">
        <Navbar/>
        <div className="topp">
          <div className="left">
            <div className="editbutton">EDIT</div>
            <h1 className="title">INFORMATION</h1>
            <div className="item">

             <img src="https://picsum.photos/id/22/200" alt="" className='itemimg' />
             <div className="detail">
              <div className="itemtitle">ANIKETH VISWAM</div>
              <div className="detailitem">
                <div className="itemkey">EMAIL</div>
                <div className="itemvalue">anikethviswam@gmail.com</div>
              </div>
              <div className="detailitem">
                <div className="itemkey">ADDRESS</div>
                <div className="itemvalue">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className="detailitem">
                <div className="itemkey">PHONE</div>
                <div className="itemvalue">+12345678</div>
              </div>
              <div className="detailitem">
                <div className="itemkey">COUNTRY</div>
                <div className="itemvalue">INDIA</div>
              </div>
            </div>
            </div>
           

          </div>
          <div className="Right"><Chart aspect={3/1}/></div>
        </div>
        <div className="Bottom">
          <Tabular/>
         
        </div>
      </div>

    </div>
  )
}

export default Single