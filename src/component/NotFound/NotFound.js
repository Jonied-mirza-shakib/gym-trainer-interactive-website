import React from 'react';
import './NotFound.css'
import notFoundImg from '../../image/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={notFoundImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;