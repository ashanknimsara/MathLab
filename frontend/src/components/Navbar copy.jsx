import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";

import React, { useState } from 'react'

const Navbar = () => {


  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="search..."/>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                {/* <button className="item btn btn-secondary">
                    <EngineeringIcon/>
                     New 
                </button> */}
                {/* <div className="item">
                    <DarkModeOutlinedIcon/>            
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon/>            
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon/>            
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon/>  
                    <div className="counter">2</div>          
                </div>
                <div className="item">
                    <ListOutlinedIcon/>            
                </div> */}
            </div>
        </div>
    </div>

    
  )
}

export default Navbar