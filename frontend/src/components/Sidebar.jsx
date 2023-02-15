import React from 'react'
import "./sidebar.scss";
import homeimg from "../images/homeimg.png"
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
            <img src={homeimg} alt="Your Image" style={{
                    height: '75px',
                    width: '75px',
                    // marginTop:'50px',
                    // position:'relative',
                    // float: 'left',
                    // radius: '50px',
                    // background:'white',
                    
                  }} />
            </div>
            
            <div className="center">

            <p className='title'style={{color:'white',}}>Name :- </p>
            <p className='title'style={{color:'white',}}>Email :-</p>
            <hr />
            <p className='title'style={{color:'white',}}>No of games complite :- </p>
            <p className='title'style={{color:'white',}}>Points :-</p>
            <p className='title'style={{color:'white',}}>Awards :- </p>
            <p className='title'style={{color:'white',}}>Leaderbord</p>
            <hr />
            
                <ul>
                    
                </ul>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
};

export default Sidebar;