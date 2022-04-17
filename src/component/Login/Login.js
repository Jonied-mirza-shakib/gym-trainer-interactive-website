import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLoginform = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='login'>
            <div className="container">
                <div className="row">
                    <h4 className='fs-4 text-light text-center pt-5 pb-3'>Login Please !!!</h4>
                    <div className="col-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <Form onSubmit={handleLoginform}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <input className='form-submit btn btn-primary' type="submit" value="Login" />
                                </Form>
                                <p style={{ color: 'red' }}>{error?.message}</p>
                                {
                                    loading && <p>Loading...</p>
                                }
                                <p> Are You New Person? <span> <Link className='text-warning' to='/signUp' >Create an Account</Link></span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;