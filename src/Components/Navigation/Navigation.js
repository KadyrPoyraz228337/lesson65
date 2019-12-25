import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import Toolbar from "./Toolbar/Toolbar";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>Static page</NavbarBrand>
                <Toolbar/>
            </Container>
        </Navbar>
    );
};

export default Navigation;