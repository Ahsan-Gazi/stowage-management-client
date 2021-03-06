import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
 import logo from '../../../images/banner/logo1.jpg';

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              height={30}
              width={30}
               src={logo}
              alt=""
              className="d-inline-block align-top"
            />{' '}
           
          <>Sharp-Teck</>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* navbar menu start first section */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              {user && (
                <NavDropdown title="Menu Items" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/manageItems">
                    Manage Items
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addItem">
                    Add Item
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/myItems">
                    My Items
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              
            </Nav>
            <Nav>
              {user && (
                <NavDropdown
                  title="Inventory Items"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/manageInventory">
                    Manage Inventory
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addInventoryItem">
                    Add Inventory Item
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                  to="/"
                  onClick={() => signOut(auth)}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
                to="/register"
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
