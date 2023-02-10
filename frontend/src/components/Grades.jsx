import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from './Navbar';
import number1 from '../images/number1.gif'
import number2 from '../images/number2.gif'
import number3 from '../images/number3.gif'
import number4 from '../images/number4.gif'
import number5 from '../images/number5.gif'
import number6 from '../images/number6.gif'
import number7 from '../images/number7.gif'
import number8 from '../images/number8.gif'
import number9 from '../images/number9.gif'
import number10 from '../images/number10.gif'
import number11 from '../images/number11.gif'
import { Link } from "react-router-dom";

const Grades = () => {
  return (
    <div>
    <Navbar/>
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-5">Select Your Grade</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number1}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 1
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number2}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 2
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number3}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 3
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number4}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 4
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number5}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 5
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <hr/>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number6}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 6
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col><Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number7}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 7
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col><Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number8}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 8
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number9}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 9
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number10}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 10
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} md={2} lg={2}>
          <Card className="mb-3">
          <Card.Img style={{  height: "100px"}} variant="top" src={number11}  />
            <Card.Body>
              <Card.Title><Link to="#" class="nav-link">
                    Grade 11
                  </Link></Card.Title>
                   
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        </Container>
        <div className="footer">
            <Footer />
        </div>

        </div>
  );
}
export default Grades;