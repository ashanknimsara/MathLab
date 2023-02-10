import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
            <Link to="/" class="nav-link">
            <img
                src={require("../images/logo-red.png")}
                width="110px"
                height="50px"
              ></img>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/Games" class="nav-link">
                    Games
                  </Link>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link " href="#" >
                    Leaderboard
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
                </li>
                
            </ul>
            <button className="btn btn-outline-primery ms-auto px-4 rounded-pill">
                <i className="fa fa-sign-in me-2"></i>Login</button>
            <button className="btn btn-outline-primery ms-2 px-4 rounded-pill">
                <i className="fa fa-user-plus me-2"></i>Register</button>
            </div>
        </div>
        </nav>

        </div>
    );
}
export default Navbar;