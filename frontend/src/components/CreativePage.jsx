import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigationBar from './NavigationBar';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(5),
    textAlign: 'center',
  },
  heroTitle: {
    fontWeight: 700,
  },
  heroButton: {
    marginTop: theme.spacing(3),
  },
}));

const CreativePage = () => {
  const classes = useStyles();

  return (
    <div>
      <NavigationBar/>
    
    <Container fluid className={classes.heroContainer}>
      <Row>
        <Col>
          <Typography variant="h1" className={classes.heroTitle}>
            Welcome to the Kids Learning LMS
          </Typography>
          <Button variant="contained" color="secondary" className={classes.heroButton}>
            Start Learning
          </Button>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default CreativePage;
