import "./Navbar.css"
import React from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            
          </div>
          <div className="item">
            <LanguageIcon />
          </div>
            <div className="item">
            <DarkModeIcon/>
            
            </div>
            <div className="item">
            <FullscreenExitIcon/>
            
            </div>
            <div className="item">
            <CircleNotificationsIcon/>
            
            </div>
            <div className="item">
            <ChatBubbleIcon/>
            
            </div>
            <div className="item">
              <ListIcon/>
            
            </div>
            <div className="item">
              <img src="https://picsum.photos/id/65/200
              " alt="" className="avatar" />
            
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;