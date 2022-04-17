import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id="service" className="service-details pt-5 bg-dark">
            <div className="container">
                <div className="row">
                    <h1 className="text-center mb-5 text-light">HAVE A LOOK AT OUR SERVICES</h1>
                    {
                        service.map(services =>
                            <div className="col-lg-4 mb-3">
                                <Card className="text-center text-light" style={{ backgroundColor: "darkcyan" }}>
                                    <Card.Img variant="top" src={services.image} />
                                    <Card.Body>
                                        <Card.Title>{services.details}</Card.Title>
                                        <Card.Text>
                                            {services.description}
                                        </Card.Text>
                                        <Link to='/checkout'>
                                            <Button variant="primary">Check Out</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;