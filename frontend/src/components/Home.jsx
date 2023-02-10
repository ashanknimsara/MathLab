import React from "react";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import homeimg from "../images/homeimg.png"
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <section id="Home" >
            
              <div className="container">
                <br/><br/><br/><br/>

                <div className="row justify-content-left">
                  <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-white">
                      Welcome to Math Lab
                    </h1>

                    <p className="lead text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim molestiae aperiam porro eius ipsam adipisci tenetur voluptates? Illo, repellendus id.</p>
                    
                    <button className="btn btn-light me-4 px-4 py-2 rounded-pill" color="white">
                      <Link to="/grades" class="nav-link">
                        Start Learning &nbsp; <i className="fa fa-hand-o-right me-2"></i>
                      </Link>
                      
                    </button>

                  </div>
                </div>

                <div style={{ position: 'absolute', right: '0', top: '55%', transform: 'translateY(-50%)' }}>
                  <img src={homeimg} alt="description of the image" style={{
                    height: '320px',
                    width: '450px',
                    margin: '0 auto'
                  }} />
                </div>

              </div>

            </section>

            <About/>
            <Footer/>

        </div>
    );

}
export default Home;
