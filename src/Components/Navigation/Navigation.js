import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">Static page</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Navigation;