import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './CheckOut.css'
import { useState } from 'react';

const CheckOut = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const nameFiled = event => {
        setName(event.target.value);
    }
    const emailFiled = event => {
        setEmail(event.target.value);
    }
    const phoneFiled = event => {
        setPhone(event.target.value);
    }
    const checkOutForm = event => {
        event.preventDefault();
        // if (name && email && phone) {

        // }

        setEmail('')
        setPhone('')
    }
    return (
        <div className='container'>
            <div className="row pt-5">
                <div className="col-8 mx-auto">
                    <div className="card">
                        <div className="card-body bg-light">
                            <Form onSubmit={checkOutForm} className='w-50 mx-auto d-block'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control onBlur={nameFiled} type="text" placeholder="Enter Your Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onClick={emailFiled} type="email" placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control onClick={phoneFiled} type="text" placeholder="Enter Your Number" required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;