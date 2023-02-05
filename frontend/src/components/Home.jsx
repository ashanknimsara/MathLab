import React from "react";

const Home = () => {
    return(
        <div>
            <section id="Home">
                <div className="container">
                <br/><br/><br/><br/>
                    <div className="row justify-content-left">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-white">
                                Learn Mathematics With Fun
                            </h1>
                            <p className="lead text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim molestiae aperiam porro eius ipsam adipisci tenetur voluptates? Illo, repellendus id.</p>
                            
                            <button className="btn btn-light me-4 px-4 py-2 rounded-pill" color="white">
                                Lets Go <i className="fa fa-hand-o-right me-2"></i></button>
                                
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </div>
    );

}
export default Home;
