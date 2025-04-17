import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Outlet} from 'react-router-dom'; //라우터 안에있는 자손들 가져옴
import './Applayout.style.css'


const Applayout = () => {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand className='main-nav' href="/">코딩 알려주는 누나 도서관</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="/">메인</Nav.Link>
        <Nav.Link href="/">나의 책</Nav.Link>
        <Nav.Link href="/login">로그인</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Applayout