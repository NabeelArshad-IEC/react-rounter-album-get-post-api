import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container } from 'reactstrap';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file for additional styling

function App() {
  return (
    <div>
      <Navbar className="my-navbar" color="light" light expand="md">
        <Container>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/" activeClassName="active">Albums</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/posts" activeClassName="active">Posts</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Albums />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/album/:albumId" element={<AlbumDetails />} />
      </Routes>
    </div>
  );
}

export default App;
