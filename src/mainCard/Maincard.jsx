import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Maincard = () => {
  return (
    <div >
        <Container>
        <div>
            인기도서
        </div>
    
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>

    </Card.Body>
  </Card>
  </Container>
  </div>
  )
}

export default Maincard