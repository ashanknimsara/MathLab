import React from "react";
import { Container, Row, Col, Table, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Leaderboard = () => {
    return(
        <div>
            <Navbar/>

    <Container>
        <Row>
        <Col>
          <h1 className="text-center my-5">Fun Games</h1>
        </Col>
      </Row>
        <Row>
           <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Row>
    </Container>
    <div className="footer">
            <Footer />
        </div>
        </div>
    );
}
export default Leaderboard;