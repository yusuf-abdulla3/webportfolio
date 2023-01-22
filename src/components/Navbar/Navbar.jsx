// import React from 'react';
// import logo from '../../images/yusuf-logo.png';

// const Nav = () => {
//   return (
//     <div className="nav">
//       <div>
//         <img className="nav__logo" src={logo} alt="logo" />
//       </div>
//       <div>
//         <ul className="nav__items">
//           <a href="#hero">Home</a>
//           <a href="#about">About</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//           <a href="https://resume.creddle.io/resume/hotd8oqyo94" target="_blank" rel="noreferrer">
//             Resume
//           </a>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/yusuf-logo.png';

const AppNavbar = () => {
  return (
    <Navbar variant="primary" sticky="top" style={{ backgroundColor: 'black', height: '7vh' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="nav__logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav--item" href="#hero">
            Home
          </Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://resume.creddle.io/resume/hotd8oqyo94" target="_blank">
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
