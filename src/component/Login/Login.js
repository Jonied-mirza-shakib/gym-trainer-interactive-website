import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const resetPassword = async () => {
        // const email = setEmail(event.target.value);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [navigate, user])


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
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onBlur={handlePassword} type="password" value={password} placeholder="Password" required />
                                    </Form.Group>
                                    <input className='form-submit btn btn-primary' type="submit" value="Login" />
                                </Form>
                                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                                <p style={{ color: 'red' }}>{error?.message}</p>
                                {
                                    loading && <p>Loading...</p>
                                }
                                <p> Are You New Person? <span> <Link className='text-warning' to='/signUp' >Create an Account</Link></span> </p>
                                <ToastContainer />
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;