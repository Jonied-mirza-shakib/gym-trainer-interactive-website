import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear()
    return (
        <div className='footer text-center' style={{ backgroundColor: 'brown', paddingTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='fs-5 text-light'>Copy right &copy; {year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;