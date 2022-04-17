import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleName = event => {
        setName(event.target.value)
    }
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmpassword(event.target.value)
    }

    if (user) {
        navigate('/')
    }
    const handleSignUpForm = event => {
        event.preventDefault()
        if (password !== Confirmpassword) {
            setError('Your two password did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='login'>
                <div className="container">
                    <div className="row">
                        <h4 className='fs-4 text-light text-center pt-5 pb-3'>SignUp Please !!!</h4>
                        <p className='text-white'>{loading}</p>
                        <div className="col-6 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <Form onSubmit={handleSignUpForm}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <p style={{ color: 'red' }}>{error?.message}</p>
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