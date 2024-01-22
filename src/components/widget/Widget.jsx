import React from 'react'
import "./Widget.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Widget = ({type}) => {

    let data;

    const amount=100;
    const diff=20;
    switch (type){
        case "user":
        data={
            title:"USERS",
            ismoney:false,
            link:"SEE ALL USERS",
            icon:<PersonIcon className='icon' style={{color:"crimson"}}  />,
        };
        break;
        case "order":
        data={
            title:"ORDERS",
            ismoney:false,
            link:"SEE ALL ORDERS",
            icon:<ShoppingCartIcon className='icon' style={{color:"gold"}} />,
        };
        break;
        case "earnings":
        data={
            title:"EARNING",
            ismoney:true,
            link:"SEE ALL EARNINGS",
            icon:<AttachMoneyIcon className='icon' style={{color:"green"}} />,
        };
        break;
        case "balance":
        data={
            title:"BALANCE",
            ismoney:true,
            link:"SEE NET BALANCE",
            icon:< AccountBalanceWalletIcon className='icon' style={{color:"purple"}} />,
        };
        break;
     default:
        break;

      
}
  return (
    <div className='widget'>
        <div className='left'>
            <div className='title'>{data.title}</div>
            <div className='counter'>{data.ismoney && '$'}{amount}</div>
            <div className='link'>{data.link}</div>

        </div>
        <div className='right'>
            <div className='percentage positive'>
            <KeyboardArrowUpIcon className='icon'/>
            {diff}%
            </div>
            {data.icon}

        </div>

    </div>
  )
}

export default Widget