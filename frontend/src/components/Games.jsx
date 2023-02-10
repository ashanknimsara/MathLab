import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from './Navbar';
import category1 from '../images/category1.gif'
import category2 from '../images/category2.gif'
import category3 from '../images/category3.gif'
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div>
    <Navbar/>
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-5">Fun Games</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-3">
          <Link to="/grades" class="nav-link">
          
                      
          <Card.Img style={{  height: "200px" }} variant="top" src={category1}  />
          </Link>
            <Card.Body>
              <Card.Title>Card Games</Card.Title>
              <ListGroup variant="flush">
              <ListGroup.Item className="list-group-item-action">
              
              <Link to="/" class="nav-link">
                    Domino Banner Games
                  </Link>
                   
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                <Link to="/memory" class="nav-link">
                    Memory
                  </Link>
                   
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                    See More...
                  </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-3">
          <Card.Img style={{  height: "200px" }} variant="top" src={category2}  />
            <Card.Body>
              <Card.Title>Bord Games</Card.Title>
              <ListGroup variant="flush">
              <ListGroup.Item className="list-group-item-action">
                    Subcategory 1
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                    Subcategory 2
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                    Subcategory 3
                  </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-3">
          <Card.Img style={{  height: "200px" }} variant="top" src={category3}  />
            <Card.Body>
              <Card.Title>Folk Games</Card.Title>
              <ListGroup variant="flush">
              <ListGroup.Item className="list-group-item-action">
                    Subcategory 1
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                    Subcategory 2
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-action">
                    Subcategory 3
                  </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Category 4</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Subcategory 1</ListGroup.Item>
                <ListGroup.Item>Subcategory 2</ListGroup.Item>
                <ListGroup.Item>Subcategory 3</ListGroup.Item>
              </ListGroup>
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
export default Games;