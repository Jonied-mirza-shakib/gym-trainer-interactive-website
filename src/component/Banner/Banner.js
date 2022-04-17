import React from 'react';
import './Banner.css'
import banner from '../../image/banner-man-2.png'

const Banner = () => {
    return (
        <div className='row' style={{ backgroundColor: '#420205' }}>
            <div className="col-12">
                <img className='w-100' src={banner} alt="" />
                <div className='container banner-details'>
                    <p className='welcome'>WELCOME TO</p>
                    <h1 className='banner-title'>Mutants GYM</h1>
                    <p>Get in Shape Now!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;