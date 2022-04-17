import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const handleName = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    console.log(user)
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate, user])

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='login'>
                <div className="container">
                    <div className="row">
                        <h4 className='fs-4 text-light text-center pt-5 pb-3'>SignUp Please !!!</h4>
                        <div className="col-6 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <Form onSubmit={handleCreateUser}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <p style={{ color: 'red' }}>{error?.message}</p>
                                        <p style={{ color: 'red' }}>{hookError?.message}</p>
                                        {
                                            loading && <p>Loading...</p>
                                        }
                                        <Button variant="primary" type="submit" required>
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;