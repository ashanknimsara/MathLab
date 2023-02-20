import React from "react";
import { Button, Container,Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import number1 from '../images/number1.gif'
import Footer from './Footer';
import Navbar from './Navbar';

const Grade6 = () => {
  return (
    <div>
    <Navbar />
    
    <Container>
    <Row>
        <Col>
          <h1 className="text-center my-5">Grade 6</h1>
        </Col>
        
      </Row>
      <Row>
      <Col>
        <h2 className=" my-5">Domino</h2>
            <hr/>
        </Col>
      </Row>
      <Row>
      <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="/DB1" class="nav-link">
                    Domino Banner 01
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Game title
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
      <Col>
        <h2 className=" my-5">title</h2>
            <hr/>
        </Col>
      </Row>
      <Row>
      <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Game title
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Game title
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Game title
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Container>
    
    
        
            <Footer />
           
    </div>
  );
};

export default Grade6;
