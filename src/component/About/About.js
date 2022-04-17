import React from 'react';
import './About.css'
import aboutImg from '../../image/about-man.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h2>WE ARE MUTANTS,</h2>
                        <h2>THE BEST GYM IN PATNA.</h2>
                        <p>At Mutants, we believe in providing a holistic gymming and workout experience to our customers. With state of the art equipments available for a variety of exercises such as Crossfit, Endurance, Cardio, Strength and an immaculate team of Personal Trainers present ever vigilantly throughout the day to help out and coach our members whenever needed, we at Mutants Gym promise to be the best gym in Patna.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;