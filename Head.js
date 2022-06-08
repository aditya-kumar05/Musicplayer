import React from "React";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Head=()=>{
    return(
        <div className="container">
        <div className="py-4">
<Navbar bg="light" expand="lg">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                >
                    <Nav.Link href="#active" className="home">Home</Nav.Link>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar>
            </div>
            </div>

    );
};
export default Head;
