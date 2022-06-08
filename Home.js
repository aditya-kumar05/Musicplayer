import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import Table from "./Table";
import Atable from "./Atable";
import Sect from "./Sect";


const Home = () => {
    return (
        <><div className="container">
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
            
            

            <Sect type="Songs" add="Song" />
            
            <Table />
            
            <Sect type="Artist" add="Artist" />

            <Atable />

        </div>
    </div>
           
        </>
    );
};
export default Home;

