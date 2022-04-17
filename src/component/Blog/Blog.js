import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className="row">
                <div className="col-12">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Difference between authorization and authentication?</Accordion.Header>
                            <Accordion.Body>
                                The authorization is a process utilized in an app that helps in controlling the informational access and limiting actions performed by users. Similarly, authentication is a process to check if the user is allowed to access the information or perform any action.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are you using firebase?What other options do you have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                                Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                            <Accordion.Body>
                                Parse = Open Source Backend Platform;
                                Back4app = Parse Hosting Platform;
                                Kinvey = Mobile Backend as a Service (mBaaS) for the Enterprise;
                                Backendless = Mobile Backend and API Services Platform;
                                Kuzzle = Backend for web, hybrid, or native mobile apps and IoT projects;
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;