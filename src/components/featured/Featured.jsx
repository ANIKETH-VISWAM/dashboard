import React from 'react'
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="Top">
            <div className='revenue'>
                TOTAL REVENUE
            </div>
           < MoreVertIcon className='icon'/>


        </div>
        <div className="boottom">
            <div className='progressbar'>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total Sales Made Today</p>
            <p className="amount">420$</p>
            <p className="desc">Previous transactions processing.Last payments may not be included.</p>
          <div className='summary'>

            <div className="item">
                <div className="itemtitle">TARGET</div>
                <div className="itemresult negative">
                    <ArrowDownwardIcon fontSize='small'/>
                    <div className="resultamount">$12.5k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemtitle">LAST WEEK</div>
                <div className="itemresult negative">
                    <ArrowDownwardIcon fontSize='small'/>
                    <div className="resultamount">$12.5k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemtitle">LAST MONTH</div>
                <div className="itemresult positive">
                    <ArrowUpwardIcon fontSize='small'/>
                    <div className="resultamount">$12.5k</div>
                </div>
            </div>

          </div>
           
          
            
        </div>
    </div>
  )
}

export default Featured