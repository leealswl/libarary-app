import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './Applayout2.style.css'


const Applayout2 = () => {
  return (
    <div className='main-nav2'>  
        <Navbar expand="lg" className='main-nav-bg'>
    <Container>
      <Navbar.Brand className='nav2'>코딩 알려주는 누나 도서관</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder='책 제목이나 작가를 검색하세요'
            className="me-2"
            aria-label="Search"
            size='lg'
            style={{ width: '500px', marginRight: '7rem' }}
          />
          <Button variant="outline-success">검색</Button>
        </Form>
    </Container>
  </Navbar>
  </div>
  )
}

export default Applayout2