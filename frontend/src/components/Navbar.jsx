import React from "react";

const Navbar = () => {
    return(
                <div>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img
                src={require("../images/logo-red.png")}
                width="100px"
                height="45px"
              ></img>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Games</a>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
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