import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../image/logo-color.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div style={{ backgroundColor: '#420205' }}>
            <Navbar expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-light fs-5' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-light fs-5' href='#service'>Service</Nav.Link>
                            <Nav.Link className='text-light fs-5' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-light fs-5' as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <button onClick={handleSignOut} className='text-white mx-3' style={{ backgroundColor: '#420205' }}>Sign out</button> :
                                    <Nav.Link className='text-light fs-5' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;