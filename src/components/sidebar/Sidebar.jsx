import React from 'react'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}><div className='logo'>ANIKETH</div></Link>
            
        </div>
        <hr />
        <div className='mid'>
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className='icons' />
                    <span>DASHBOARD</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <GroupOutlinedIcon className='icons' />
                    <span>USERS</span>
                </li>
                </Link>
                <Link to='/users/:userid' style={{textDecoration:"none"}}>
                <li>
                    <ShoppingCartCheckoutOutlinedIcon className='icons' />
                    <span>PRODUCTS</span>
                </li>
                </Link>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <LocalShippingOutlinedIcon className='icons' />
                    <span>DELIVERY</span>
                </li>
                </Link>
                <li>
                    <FavoriteBorderOutlinedIcon className='icons' />
                    <span>ORDERS</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <BarChartOutlinedIcon className='icons' />
                    <span>STATS</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className='icons' />
                    <span>NOTIFICATIONS</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <ComputerOutlinedIcon className='icons' />
                    <span>SYSTEM HEALTH</span>
                </li>
                <li>
                    <LoginOutlinedIcon className='icons' />
                    <span>LOGS</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icons' />
                    <span>SETTINGS</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxOutlinedIcon className='icons'  />
                    <span>PROFILE</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icons' />
                    <span>LOGOUT</span>
                </li>
            </ul>
            
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
       
        
    </div>
  )
}

export default Sidebar