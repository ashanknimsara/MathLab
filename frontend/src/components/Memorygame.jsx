import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from './Footer';
import Navbar from './Navbar';

const Memorygame = () => {
  return (
    <div>
    
    <Navbar />
    
    <Container>
    
        
      <Row className="justify-content-center">

      <div className="col-md-8 mt-5">
            <h1 className="display-4 fw-bolder text-center font-weight-bold">
                 Easter Memory
            </h1>
            <h3 className="display-6 fw-bolder mb-4 text-green">
                Story
            </h3>
                <p className="lead text-black">Once upon a time, in a magical forest filled with colorful Easter eggs, there lived a very special Easter Rabbit named Benny. Benny loved his job of delivering Easter eggs to all the children in the forest, but this year, he was facing a big problem. He had accidentally mixed up all the eggs and did not know which egg went to which child

                    Benny was feeling very sad and hopeless until he remembered a game that his grandmother used to play with him. The game was called "Memory," and it was a game where you matched pairs of cards to win.So You can help Benny to find eggs</p>
                    
        <div className="embed-responsive embed-responsive-16by9">
            <iframe 
                className="embed-responsive-item" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                allowFullScreen 
            />
        </div>
            <h3 className="display-6 fw-bolder mb-4 text-green">
                Instructions
            </h3>
            <ol class="list-group">
                <li class="list-group-item">Turn over any two cards.</li>
                <li class="list-group-item"> If the two cards match, keep them.</li>
                <li class="list-group-item">If they don't match, turn them back over</li>
                <li class="list-group-item">Keep playing until all the cards have been matched</li>
                <li class="list-group-item">The game is over when all the cards have been matched</li>
            </ol>
            <br/>
                                
        </div>
        <Col xs={6}>
          <iframe src="https://www.improvememory.org/wp-content/games/easter-memory/index.html" title="memory" style={{ width: "100%", height: "400px" }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={6}>
          <Button
            variant="primary"
            block
            onClick={() => window.location.href = "https://www.improvememory.org/wp-content/games/easter-memory/index.html"}
          >
             Full Screen &nbsp;
            <i class="fa fa-arrows" aria-hidden="true"></i>
           
          </Button>
        </Col>
      </Row>
    </Container>
    <br></br>
            <Footer />
        
    </div>
  );
};

export default Memorygame;
