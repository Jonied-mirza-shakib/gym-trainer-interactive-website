import React from 'react';
import './NotFound.css'
import notFoundImg from '../../image/notFound.jpg'

const NotFound = () => {
    return (
        <div style={{ backgroundColor: 'aliceblue' }}>
            <div className="container justify-content-center d-flex">
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-center pt-2'>OPPSS!!!</h3>
                        <img className='pt-5 pb-5' src={notFoundImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;